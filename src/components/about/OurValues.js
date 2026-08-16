import { LeftArrow, RightArrow } from "../../Icons";

const VALUES = [
  {
    title: "Inclusivity",
    icon: "fas fa-users",
    color: "#1ab9ff",
    desc: "We celebrate the uniqueness of every child, ensuring they feel valued, heard, and respected in a diverse and welcoming environment.",
  },
  {
    title: "Community",
    icon: "fas fa-handshake",
    color: "#e6a72a",
    desc: "We build strong partnerships with families and the broader community, creating a supportive network that nurtures each child's growth.",
  },
  {
    title: "Creativity",
    icon: "fas fa-palette",
    color: "#b250fe",
    desc: "We foster a love for learning through imaginative thinking and creative expression, powered by hands-on, play-based activities.",
  },
  {
    title: "Safety & Care",
    icon: "fas fa-shield-check",
    color: "#ff6666",
    desc: "The safety and well-being of every child is our top priority. We provide a secure, supportive environment where children feel emotionally and physically safe.",
  },
];

const OurValues = () => {
  return (
    <section className="tf-section bg-tint">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">What We Stand For</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                The Values Behind Everything We Do
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                These values define the environment we create and the
                relationships we nurture within our community.
              </p>
            </div>
          </div>
          {VALUES.map((item) => (
            <div className="col-md-6 col-12 m-b30" key={item.title}>
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

export default OurValues;
