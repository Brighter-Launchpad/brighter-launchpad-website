const PILLARS = [
  {
    title: "Our Mission",
    icon: "fas fa-bullseye",
    color: "#b250fe",
    desc: "To nurture young minds, inspire creativity, and build a strong foundation for lifelong learning in a safe, caring, and inclusive environment.",
  },
  {
    title: "Our Vision",
    icon: "fas fa-eye",
    color: "#1ab9ff",
    desc: "Through play and shared experiences, children develop social skills, build friendships, and learn to express themselves with confidence — within a warm, caring community.",
  },
  {
    title: "Our Purpose",
    icon: "fas fa-rocket",
    color: "#ff6666",
    desc: "To create a space where curiosity, creativity, and confidence thrive. We give children the tools to succeed academically, socially, and emotionally — setting them up for a future full of possibility.",
  },
];

const MissionVisionPurpose = () => {
  return (
    <section className="tf-section bg-tint">
      <div className="container">
        <div className="row">
          {PILLARS.map((item) => (
            <div className="col-md-4 m-b30" key={item.title}>
              <div className="sc-advantage wow fadeIn animated">
                <div className="icon" style={{ backgroundColor: item.color }}>
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionPurpose;
