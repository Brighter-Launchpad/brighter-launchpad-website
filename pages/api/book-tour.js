import { Resend } from "resend";
import { locations } from "../../src/data/locations";
import { pushLeadToHubSpot, splitName } from "../../src/lib/hubspot";

const TO_EMAIL = "brighterlaunchpadfranchise@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, location, preferredDay, preferredTime } =
    req.body || {};

  if (!name || !email || !phone || !location || !preferredDay) {
    return res.status(400).json({
      error: "Name, email, phone, location, and preferred day are required.",
    });
  }

  const matchedLocation = locations.find((l) => l.navName === location);
  const locationLabel = matchedLocation ? matchedLocation.navName : location;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const detailLines = [
    `New tour booking submitted from the website:`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Location: ${locationLabel}`,
    `Preferred Day: ${preferredDay}`,
    preferredTime ? `Preferred Time: ${preferredTime}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Brighter Launchpad Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Tour Request — ${name}`,
      text: detailLines,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email." });
    }

    const { firstName, lastName } = splitName(name);
    await pushLeadToHubSpot({
      email,
      firstName,
      lastName,
      phone,
      noteBody: `Tour Request\n\n${detailLines}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Tour booking email failed:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
