import Link from "next/link";

const scrollToLocations = (e) => {
  e.preventDefault();
  document.getElementById("locations-list")?.scrollIntoView({ behavior: "smooth" });
};

const FinalCTA = () => {
  return (
    <section className="tf-sc-contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="sc-contact wow fadeIn animated">
              <div className="wrap">
                <h2 className="title clr-pri-1">A Brighter Future Begins Here.</h2>
                <p className="sub clr-pri-1 f-mulish">
                  Discover a safe, joyful, and nurturing environment where
                  your child can play, explore, and grow with confidence.
                  Join the Brighter Launchpad family today.
                </p>
              </div>
              <div className="inner-sc-contact">
                <div className="box-btn location-final-cta-links">
                  <Link href="/about">
                    <a className="location-text-link">More Info</a>
                  </Link>
                  <a
                    href="#locations-list"
                    className="location-text-link"
                    onClick={scrollToLocations}
                  >
                    Visit A Branch
                  </a>
                  <Link href="/contact">
                    <a className="fl-btn st-9">
                      <span className="inner">Enroll Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
