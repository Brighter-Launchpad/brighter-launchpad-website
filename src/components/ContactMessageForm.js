import { useState } from "react";

const ContactMessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <form id="commentform" className="comment-form" onSubmit={handleSubmit}>
      <div className="fx flex-wrap">
        <fieldset className="name">
          <input
            type="text"
            placeholder="Full Name Here"
            required
            name="name"
            className="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className="email">
          <input
            type="email"
            placeholder="Email Address"
            required
            name="mail"
            className="mail"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="phone">
          <input
            type="tel"
            placeholder="Phone Number"
            name="number"
            className="number"
            id="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </fieldset>
        <fieldset className="select-wrap" role="group">
          <div className="select">
            <select
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Enrollment / Book A Tour">
                Enrollment / Book A Tour
              </option>
              <option value="Careers">Careers</option>
              <option value="Franchise Opportunities">
                Franchise Opportunities
              </option>
            </select>
          </div>
        </fieldset>
        <fieldset className="message">
          <textarea
            placeholder="Write Message"
            rows={5}
            tabIndex={4}
            name="messagewr2"
            className="messagewr2"
            id="messagewr2"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </fieldset>
        <div className="wrap-btn">
          <button
            type="submit"
            className="fl-btn st-6"
            disabled={status === "submitting"}
          >
            <span className="inner">
              {status === "submitting" ? "Sending..." : "Send message"}
            </span>
          </button>
        </div>
        {status === "success" && (
          <p className="form-status-message success" role="status">
            Thanks for reaching out — we&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-status-message error" role="alert">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
};
export default ContactMessageForm;
