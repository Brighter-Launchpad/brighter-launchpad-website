import { useState } from "react";
import { locations } from "../data/locations";
import { programs } from "../data/programs";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [program, setProgram] = useState("");
  const [timeShift, setTimeShift] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, location, program, timeShift }),
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
      setProgram("");
      setTimeShift("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <form id="commentform" className="comment-form" onSubmit={handleSubmit}>
      <div className="row-form st-1 mg-bt-20">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name.........."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="row-form st-1 mg-bt-20">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address.........."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="row-form st-1 mg-bt-20">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number.........."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="row-form st-1 mg-bt-20">
        <select
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option value="" disabled>
            Location..........
          </option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.navName}>
              {loc.navName}
            </option>
          ))}
        </select>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={21}
          height={17}
          viewBox="0 0 21 17"
        >
          <g data-name={2}>
            <image
              width={21}
              height={17}
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </div>
      <div className="row-form st-1 mg-bt-20">
        <select
          id="progam"
          name="progam"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          required
        >
          <option value="" disabled>
            Progam..........
          </option>
          {programs.map((pg) => (
            <option key={pg.slug} value={pg.name}>
              {pg.name}
            </option>
          ))}
        </select>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={21}
          height={17}
          viewBox="0 0 21 17"
        >
          <g data-name={2}>
            <image
              width={21}
              height={17}
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </div>
      <div className="row-form st-1">
        <input
          type="text"
          placeholder="Time .........."
          id="time-ship"
          name="time-ship"
          value={timeShift}
          onChange={(e) => setTimeShift(e.target.value)}
        />
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={21}
          height={17}
          viewBox="0 0 21 17"
        >
          <g data-name={2}>
            <image
              width={21}
              height={17}
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </div>
      <div className="row-form">
        <button className="fl-btn st-14" type="submit" disabled={status === "submitting"}>
          <span className="inner">
            {status === "submitting" ? "Sending..." : "Apply Now"}
          </span>
        </button>
      </div>
      {status === "success" && (
        <p className="form-status-message success" role="status">
          Thanks! Your registration has been sent — we&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="form-status-message error" role="alert">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
};
export default RegistrationForm;
