import { useState } from "react";
import { LeftArrow, RightArrow } from "../../Icons";

const WORDS = [
  {
    word: "Play.",
    statement:
      "Play is how children make sense of the world — every game, giggle, and pretend adventure builds real skills.",
  },
  {
    word: "Explore.",
    statement:
      "Curious minds need room to wonder. Our centres give children the space to ask questions and discover answers.",
  },
  {
    word: "Grow.",
    statement:
      "Every day brings a new small victory — we celebrate the steps that build lasting confidence.",
  },
  {
    word: "Belong.",
    statement:
      "Every child is welcomed exactly as they are, part of a caring Brighter Launchpad family.",
  },
];

const LocationIntro = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="location-intro" className="tf-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Our Locations</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                Joyful Learning Starts Close to Home.
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <p className="wrap f-mulish clr-pri-4">
              Each Brighter Launchpad centre creates a safe, caring, and
              inclusive environment where children build confidence,
              curiosity, friendships, and a love for learning through play.
            </p>
            <div className="location-words" role="group" aria-label="What every Brighter Launchpad centre offers">
              {WORDS.map((item, index) => (
                <button
                  key={item.word}
                  type="button"
                  className="location-word-btn"
                  aria-pressed={active === index}
                  onClick={() => setActive(active === index ? null : index)}
                >
                  {item.word}
                </button>
              ))}
            </div>
            {active !== null && (
              <p className="location-word-reveal" role="status">
                {WORDS[active].statement}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationIntro;
