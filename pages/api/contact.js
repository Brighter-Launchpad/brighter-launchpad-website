import { Resend } from "resend";

const TO_EMAIL = "brighterlaunchpadfranchise@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Brighter Launchpad Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject || "General Inquiry"} — ${name}`,
      text: [
        `New message submitted from the contact page:`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subject || "General Inquiry"}`,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
