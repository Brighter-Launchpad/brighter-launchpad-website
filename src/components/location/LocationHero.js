import Link from "next/link";

const scrollToId = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LocationHero = () => {
  return (
    <section className="location-hero">
      <img
        src="assets/images/background/img1innerpage.png"
        className="hero-cutout cutout-1"
        alt=""
        aria-hidden="true"
        width={110}
        height={110}
        loading="lazy"
      />
      <img
        src="assets/images/background/img2innerpage.png"
        className="hero-cutout cutout-2"
        alt=""
        aria-hidden="true"
        width={130}
        height={130}
        loading="lazy"
      />
      <img
        src="assets/images/background/img3innerpage.png"
        className="hero-cutout cutout-3"
        alt=""
        aria-hidden="true"
        width={70}
        height={70}
        loading="lazy"
      />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">BRIGHTER LAUNCHPAD</span>
            <h1>
              A Brighter Place to
              <br />
              Play. Explore. Grow. Belong.
            </h1>
            <p className="hero-sub">
              Find a Brighter Launchpad centre near your family.
            </p>
            <div className="hero-ctas">
              <a
                href="#locations-list"
                className="fl-btn st-12"
                onClick={scrollToId("locations-list")}
              >
                <span className="inner">Find A Branch</span>
              </a>
              <Link href="/contact">
                <a className="fl-btn st-1">
                  <span className="inner">Enroll Now</span>
                </a>
              </Link>
            </div>
            <a
              href="#location-intro"
              className="scroll-cue"
              onClick={scrollToId("location-intro")}
            >
              <span className="scroll-cue-line" aria-hidden="true" />
              Scroll to Discover
            </a>
          </div>
          <div className="hero-image-wrap">
            <img
              src="assets/images/common/sc-discovery.jpg"
              alt="A child smiling while playing at a Brighter Launchpad centre"
              width={720}
              height={540}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
