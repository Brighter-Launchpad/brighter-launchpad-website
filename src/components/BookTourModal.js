import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { locations } from "../data/locations";

const BookTourButton = ({ className, children }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("mfp-zoom-out-cur");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("mfp-zoom-out-cur");
    };
  }, [open]);

  const closeAndReset = () => {
    setOpen(false);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          location,
          preferredDay,
          preferredTime,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setPreferredDay("");
      setPreferredTime("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready lead-mfp-wrap">
            <div
              className="mfp-bg mfp-ready"
              onClick={closeAndReset}
              aria-hidden="true"
            />
            <div className="mfp-container mfp-s-ready" tabIndex={-1}>
              <div className="mfp-content" ref={contentRef}>
                <div className="lead-modal">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={closeAndReset}
                  >
                    ×
                  </button>
                  <h3 className="lead-modal-title">Book A Tour</h3>
                  <p className="lead-modal-sub">
                    Fill out the form below and we&apos;ll confirm your tour
                    time shortly.
                  </p>
                  <form className="book-tour-form" onSubmit={handleSubmit}>
                    <div className="lead-form-row">
                      <label htmlFor="book-tour-name">Full Name</label>
                      <input
                        type="text"
                        id="book-tour-name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row">
                      <label htmlFor="book-tour-email">Email Address</label>
                      <input
                        type="email"
                        id="book-tour-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row">
                      <label htmlFor="book-tour-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="book-tour-phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row">
                      <label htmlFor="book-tour-location">Location</label>
                      <select
                        id="book-tour-location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select a location
                        </option>
                        {locations.map((loc) => (
                          <option key={loc.id} value={loc.navName}>
                            {loc.navName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="book-tour-day">Preferred Day</label>
                        <input
                          type="date"
                          id="book-tour-day"
                          name="preferredDay"
                          value={preferredDay}
                          onChange={(e) => setPreferredDay(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="book-tour-time">Preferred Time</label>
                        <input
                          type="time"
                          id="book-tour-time"
                          name="preferredTime"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="fl-btn st-14 lead-submit"
                      disabled={status === "submitting"}
                    >
                      <span className="inner">
                        {status === "submitting"
                          ? "Sending..."
                          : "Request Tour"}
                      </span>
                    </button>
                    {status === "success" && (
                      <p
                        className="form-status-message success"
                        role="status"
                      >
                        Thanks! Your tour request has been sent — we&apos;ll
                        be in touch soon.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="form-status-message error" role="alert">
                        {errorMessage ||
                          "Something went wrong. Please try again."}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default BookTourButton;
