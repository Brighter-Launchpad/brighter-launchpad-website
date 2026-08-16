import { LeftArrow, RightArrow } from "../../Icons";

const PILLARS = [
  {
    title: "Play",
    icon: "fas fa-shapes",
    color: "#ff6666",
    desc: "Play is how children make sense of the world. Every day is filled with hands-on experiences that spark creativity, build problem-solving skills, and create joyful moments of discovery.",
  },
  {
    title: "Explore",
    icon: "fas fa-compass",
    color: "#1ab9ff",
    desc: "Curiosity is a child's superpower. We create safe, engaging spaces where little explorers can follow their interests, ask big questions, and build confidence through hands-on discovery.",
  },
  {
    title: "Grow",
    icon: "fas fa-seedling",
    color: "#e6a72a",
    desc: "Growth happens in every giggle, every challenge, every new experience. We nurture independence, resilience, and self-expression — helping children learn at their own pace.",
  },
  {
    title: "Belong",
    icon: "fas fa-hand-holding-heart",
    color: "#b250fe",
    desc: "Brighter Launchpad is a family. Every child is valued, friendships grow naturally, and a strong sense of belonging helps little ones feel safe, confident, and ready to thrive.",
  },
];

const PlayExploreGrowBelong = () => {
  return (
    <section className="tf-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">How We Nurture</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                A Brighter Future Begins Through Joyful Learning
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                Every day at Brighter Launchpad is built around four things
                every child needs to thrive.
              </p>
            </div>
          </div>
          {PILLARS.map((item) => (
            <div className="col-lg-3 col-md-6 col-12 m-b30" key={item.title}>
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

export default PlayExploreGrowBelong;
