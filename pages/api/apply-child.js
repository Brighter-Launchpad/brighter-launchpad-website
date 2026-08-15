import { Resend } from "resend";
import { locations } from "../../src/data/locations";

const TO_EMAIL = "brighterlaunchpadfranchise@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    parentName,
    parentEmail,
    parentPhone,
    childName,
    childDob,
    location,
    preferredStartDate,
    schedule,
    daysNeeded,
    notes,
  } = req.body || {};

  if (
    !parentName ||
    !parentEmail ||
    !parentPhone ||
    !childName ||
    !childDob ||
    !location ||
    !preferredStartDate ||
    !schedule
  ) {
    return res.status(400).json({
      error:
        "Parent name, email, phone, child's name, date of birth, preferred location, preferred start date, and schedule are required.",
    });
  }

  const matchedLocation = locations.find((l) => l.navName === location);
  const locationLabel = matchedLocation ? matchedLocation.navName : location;
  const daysList = Array.isArray(daysNeeded) ? daysNeeded : [];

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Brighter Launchpad Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: parentEmail,
      subject: `New Child Application — ${childName}`,
      text: [
        `New child application submitted from the website:`,
        ``,
        `Parent/Guardian Name: ${parentName}`,
        `Email: ${parentEmail}`,
        `Phone Number: ${parentPhone}`,
        ``,
        `Child's Name: ${childName}`,
        `Child's Date of Birth: ${childDob}`,
        `Preferred Location: ${locationLabel}`,
        `Preferred Start Date: ${preferredStartDate}`,
        `Schedule Needed: ${schedule}`,
        daysList.length ? `Days Needed: ${daysList.join(", ")}` : null,
        notes ? `` : null,
        notes ? `Anything we should know:` : null,
        notes ? notes : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Child application email failed:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
