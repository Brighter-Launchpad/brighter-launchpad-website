import { Resend } from "resend";
import { pushLeadToHubSpot } from "../../src/lib/hubspot";

const TO_EMAIL = "brighterlaunchpadfranchise@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    province,
    preferredProvince,
    preferredCity,
    experience,
  } = req.body || {};

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !city ||
    !province ||
    !preferredProvince ||
    !preferredCity
  ) {
    return res.status(400).json({
      error:
        "First name, last name, email, phone, city, province, and preferred location are required.",
    });
  }

  const experienceList = Array.isArray(experience) ? experience : [];

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const detailLines = [
    `New franchise inquiry submitted from the website:`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Mobile Phone: ${phone}`,
    `City: ${city}`,
    `Province: ${province}`,
    ``,
    `Where they'd like to open:`,
    `Preferred Province: ${preferredProvince}`,
    `Preferred City / Territory: ${preferredCity}`,
    ``,
    experienceList.length
      ? `Relevant Experience: ${experienceList.join(", ")}`
      : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Brighter Launchpad Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Franchise Inquiry — ${firstName} ${lastName}`,
      text: detailLines,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email." });
    }

    await pushLeadToHubSpot({
      email,
      firstName,
      lastName,
      phone,
      noteBody: `Franchise Inquiry\n\n${detailLines}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Franchise inquiry email failed:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
