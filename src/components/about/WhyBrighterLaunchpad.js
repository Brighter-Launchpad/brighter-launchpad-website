import { LeftArrow, RightArrow } from "../../Icons";

const AUDIENCES = [
  {
    title: "For Children",
    icon: "fas fa-child",
    color: "#ff6666",
    desc: "A place to play, explore, develop, build friendships, and belong.",
  },
  {
    title: "For Parents",
    icon: "fas fa-heart",
    color: "#b250fe",
    desc: "A childcare partner focused on safety, clear communication, development, and your child's individual needs.",
  },
  {
    title: "For Educators",
    icon: "fas fa-chalkboard-teacher",
    color: "#1ab9ff",
    desc: "An environment where meaningful relationships and quality early learning matter — and where great educators are supported to do their best work.",
  },
  {
    title: "For Franchise Owners",
    icon: "fas fa-handshake",
    color: "#e6a72a",
    desc: "A growing childcare brand backed by established experience, proven systems, hands-on resources, and a shared vision.",
  },
  {
    title: "For Communities",
    icon: "fas fa-map-marked-alt",
    color: "#fab319",
    desc: "More access to quality early learning and childcare, close to home.",
  },
];

const WhyBrighterLaunchpad = () => {
  return (
    <section className="tf-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Why Brighter Launchpad</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                Why Families, Educators, and Owners Choose Brighter Launchpad
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                One brand, built to serve everyone it touches.
              </p>
            </div>
          </div>
        </div>
        <div className="why-grid">
          {AUDIENCES.map((item) => (
            <div className="sc-advantage wow fadeIn animated" key={item.title}>
              <div className="icon" style={{ backgroundColor: item.color }}>
                <i className={item.icon} aria-hidden="true" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrighterLaunchpad;
