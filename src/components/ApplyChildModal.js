import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { locations } from "../data/locations";

const SCHEDULE_OPTIONS = ["Full-Time", "Part-Time", "Before & After School"];
const DAY_OPTIONS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const ApplyChildModal = ({ className, children }) => {
  const [open, setOpen] = useState(false);
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [childDob, setChildDob] = useState("");
  const [location, setLocation] = useState("");
  const [preferredStartDate, setPreferredStartDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [daysNeeded, setDaysNeeded] = useState([]);
  const [notes, setNotes] = useState("");
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

  const toggleDay = (day) => {
    setDaysNeeded((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (daysNeeded.length === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one day needed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply-child", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setParentName("");
      setParentEmail("");
      setParentPhone("");
      setChildName("");
      setChildDob("");
      setLocation("");
      setPreferredStartDate("");
      setSchedule("");
      setDaysNeeded([]);
      setNotes("");
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
                  <h3 className="lead-modal-title">Apply Your Child</h3>
                  <p className="lead-modal-sub">
                    Fill out the form below and we&apos;ll follow up about
                    enrollment.
                  </p>
                  <form className="apply-child-form" onSubmit={handleSubmit}>
                    <h4 className="lead-form-section-title lead-form-section-title-first">
                      Parent Information
                    </h4>
                    <div className="lead-form-row">
                      <label htmlFor="apply-parent-name">
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        id="apply-parent-name"
                        name="parentName"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="apply-parent-email">Email</label>
                        <input
                          type="email"
                          id="apply-parent-email"
                          name="parentEmail"
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="apply-parent-phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="apply-parent-phone"
                          name="parentPhone"
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <h4 className="lead-form-section-title">
                      Child Information
                    </h4>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="apply-child-name">
                          Child&apos;s Name
                        </label>
                        <input
                          type="text"
                          id="apply-child-name"
                          name="childName"
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="apply-child-dob">
                          Child&apos;s Date of Birth
                        </label>
                        <input
                          type="date"
                          id="apply-child-dob"
                          name="childDob"
                          value={childDob}
                          onChange={(e) => setChildDob(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="lead-form-row lead-form-row-split">
                      <div>
                        <label htmlFor="apply-location">
                          Preferred Location
                        </label>
                        <select
                          id="apply-location"
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
                      <div>
                        <label htmlFor="apply-start-date">
                          Preferred Start Date
                        </label>
                        <input
                          type="date"
                          id="apply-start-date"
                          name="preferredStartDate"
                          value={preferredStartDate}
                          onChange={(e) =>
                            setPreferredStartDate(e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="lead-form-row">
                      <label>Schedule Needed</label>
                      <div className="lead-form-choice-group">
                        {SCHEDULE_OPTIONS.map((opt) => (
                          <label
                            key={opt}
                            className="lead-form-choice"
                            htmlFor={`apply-schedule-${opt}`}
                          >
                            <input
                              type="radio"
                              id={`apply-schedule-${opt}`}
                              name="schedule"
                              value={opt}
                              checked={schedule === opt}
                              onChange={(e) => setSchedule(e.target.value)}
                              required
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="lead-form-row">
                      <label>Days Needed</label>
                      <div className="lead-form-choice-group">
                        {DAY_OPTIONS.map((day) => (
                          <label
                            key={day}
                            className="lead-form-choice"
                            htmlFor={`apply-day-${day}`}
                          >
                            <input
                              type="checkbox"
                              id={`apply-day-${day}`}
                              name="daysNeeded"
                              value={day}
                              checked={daysNeeded.includes(day)}
                              onChange={() => toggleDay(day)}
                            />
                            {day}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="lead-form-row">
                      <label htmlFor="apply-notes">
                        Anything we should know?
                      </label>
                      <textarea
                        id="apply-notes"
                        name="notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="fl-btn st-14 lead-submit"
                      disabled={status === "submitting"}
                    >
                      <span className="inner">
                        {status === "submitting"
                          ? "Sending..."
                          : "Submit Application"}
                      </span>
                    </button>
                    {status === "success" && (
                      <p
                        className="form-status-message success"
                        role="status"
                      >
                        Thanks! Your application has been sent — we&apos;ll be
                        in touch soon.
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

export default ApplyChildModal;
