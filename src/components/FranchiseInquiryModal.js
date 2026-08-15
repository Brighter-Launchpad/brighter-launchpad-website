import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const EXPERIENCE_OPTIONS = [
  "Childcare",
  "Education",
  "Business ownership",
  "Management",
  "Real estate/development",
  "Healthcare/community services",
  "Other",
];

const FranchiseInquiryModal = ({ className, children }) => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [preferredProvince, setPreferredProvince] = useState("");
  const [preferredCity, setPreferredCity] = useState("");
  const [experience, setExperience] = useState([]);
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

  const handleExperienceChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setExperience(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/franchise-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          city,
          province,
          preferredProvince,
          preferredCity,
          experience,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCity("");
      setProvince("");
      setPreferredProvince("");
      setPreferredCity("");
      setExperience([]);
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
                  <h3 className="lead-modal-title">Own A Franchise</h3>
                  <p className="lead-modal-sub">
                    Tell us a bit about yourself and we&apos;ll be in touch
                    about franchise opportunities.
                  </p>
                  <form className="franchise-inquiry-form" onSubmit={handleSubmit}>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="franchise-first-name">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="franchise-first-name"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="franchise-last-name">Last Name</label>
                        <input
                          type="text"
                          id="franchise-last-name"
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="lead-form-row">
                      <label htmlFor="franchise-email">Email</label>
                      <input
                        type="email"
                        id="franchise-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row">
                      <label htmlFor="franchise-phone">Mobile Phone</label>
                      <input
                        type="tel"
                        id="franchise-phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="franchise-city">City</label>
                        <input
                          type="text"
                          id="franchise-city"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="franchise-province">Province</label>
                        <select
                          id="franchise-province"
                          name="province"
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select a province
                          </option>
                          {PROVINCES.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <h4 className="lead-form-section-title">
                      Where would you like to open your Brighter Launchpad?
                    </h4>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="franchise-preferred-province">
                          Preferred Province
                        </label>
                        <select
                          id="franchise-preferred-province"
                          name="preferredProvince"
                          value={preferredProvince}
                          onChange={(e) =>
                            setPreferredProvince(e.target.value)
                          }
                          required
                        >
                          <option value="" disabled>
                            Select a province
                          </option>
                          {PROVINCES.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="franchise-preferred-city">
                          Preferred City / Territory
                        </label>
                        <input
                          type="text"
                          id="franchise-preferred-city"
                          name="preferredCity"
                          value={preferredCity}
                          onChange={(e) => setPreferredCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="lead-form-row">
                      <label htmlFor="franchise-experience">
                        Do you have experience in any of the following?
                      </label>
                      <select
                        id="franchise-experience"
                        name="experience"
                        multiple
                        size={EXPERIENCE_OPTIONS.length}
                        value={experience}
                        onChange={handleExperienceChange}
                      >
                        {EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <p className="lead-form-row-hint">
                        Hold Ctrl (Cmd on Mac) to select more than one, or
                        leave blank if none apply.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="fl-btn st-14 lead-submit"
                      disabled={status === "submitting"}
                    >
                      <span className="inner">
                        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                      </span>
                    </button>
                    {status === "success" && (
                      <p
                        className="form-status-message success"
                        role="status"
                      >
                        Thanks! Your franchise inquiry has been sent —
                        we&apos;ll be in touch soon.
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

export default FranchiseInquiryModal;
