import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const stats = [
  { icon: "👶", end: 400, suffix: "+", label: "Children Enrolled" },
  { icon: "👩‍🏫", end: 75, suffix: "+", label: "Dedicated Educators" },
  { icon: "🏫", end: 6, suffix: "", label: "Early Learning Centres" },
  { icon: "🎨", end: 30, suffix: "+", label: "Inspiring Classrooms" },
  { icon: "⭐", end: 10, suffix: "+", label: "Years of Childcare Excellence" },
  { icon: "❤️", end: 1000, suffix: "+", label: "Families Served" },
];

const TfCounter = ({ nonst }) => {
  return (
    <section className={`tf-section tf-counter ${!nonst ? "st-2" : ""}`}>
      <img
        src="assets/images/pattern/fun-fact-1.png"
        alt="Image"
        className="fun-fact1 wow fadeInLeft animated"
        data-wow-delay="0.3ms"
        data-wow-duration="1200ms"
      />
      <img
        src="assets/images/pattern/fun-fact-2.png"
        alt="Image"
        className="fun-fact2 wow fadeInRight animated"
        data-wow-delay="0.3ms"
        data-wow-duration="1200ms"
      />
      <div className="container">
        <div className="row">
          {stats.map((stat) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              key={stat.label}
            >
              <div
                className="sc-fun-fact themesflat-counter wow fadeIn animated"
                data-wow-delay="0.2ms"
                data-wow-duration="1300ms"
              >
                <div className="box-icon emoji-icon">
                  <span role="img" aria-label={stat.label}>
                    {stat.icon}
                  </span>
                </div>
                <div className="box-content box">
                  <div className="number-content clr-pri-1">
                    <Counter end={stat.end} />
                    {stat.suffix}
                  </div>
                  <p className="clr-pri-1">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TfCounter;
