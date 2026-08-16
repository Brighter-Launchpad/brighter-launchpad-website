const OurStory = () => {
  return (
    <section id="our-story" className="tf-section">
      <div className="container">
        <div className="location-row">
          <div
            className="location-row-content wow fadeIn animated"
            data-wow-delay="0.2ms"
            data-wow-duration="1000ms"
          >
            <h3>How Brighter Launchpad Began</h3>
            <p className="location-row-desc">
              Brighter Launchpad was founded on a simple conviction: every
              child deserves a place to learn that feels as safe and warm as
              home — and every parent deserves to drop their child off
              without a knot in their stomach.
            </p>
            <p className="location-row-desc">
              What began as a single centre has grown into a family of
              licensed early learning centres across New Brunswick. Along the
              way we&apos;ve built more than classrooms — we&apos;ve built a
              community that celebrates creativity, diversity, and the joy of
              learning.
            </p>
            <p className="location-row-desc">
              From our first steps in creating a safe, creative environment
              to becoming a trusted partner for families across the province,
              Brighter Launchpad continues to grow and evolve — always
              staying true to our mission of nurturing young minds and
              inspiring future leaders.
            </p>
            {/* TODO: confirm founding year / first-centre town with client,
                and whether to embed a founder video here (highest-trust
                element per the page brief). */}
          </div>
          <div
            className="location-row-media wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1000ms"
          >
            <img
              src="assets/images/common/gallery-classroom-bright.png"
              alt="A bright, welcoming Brighter Launchpad classroom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
