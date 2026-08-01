const VALUES = [
  {
    title: "Play.",
    copy: "Hands-on experiences support creativity, problem-solving, and joyful learning.",
  },
  {
    title: "Explore.",
    copy: "Safe environments help children follow their interests and build confidence.",
  },
  {
    title: "Grow.",
    copy: "Daily experiences support independence, resilience, and self-expression.",
  },
  {
    title: "Belong.",
    copy: "Every child is valued and supported as part of the Brighter Launchpad family.",
  },
];

const BrandValues = () => {
  return (
    <section className="tf-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="title clr-pri-2">
              Every Child Deserves a Place to Belong.
            </h2>
            <p className="wrap f-mulish clr-pri-4">
              Brighter Launchpad is a warm, inclusive playschool where
              children thrive through exploration, creativity, and joyful
              play. Our centres nurture confidence and curiosity while giving
              children a welcoming space to feel safe, supported, and ready
              to grow.
            </p>
          </div>
          <div className="col-12">
            <div className="brand-values-grid">
              {VALUES.map((value) => (
                <div key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
