import { LeftArrow, RightArrow } from "../../Icons";
import { teachers } from "../../data/teachers";

const TeamSection = () => {
  return (
    <section className="tf-section bg-tint">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Meet The People</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                The People Behind Brighter Launchpad
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                Great early learning comes down to great people. Meet the
                team who make Brighter Launchpad feel like home.
              </p>
            </div>
          </div>
        </div>

        {/* 7a — Founder feature */}
        <div className="location-row">
          <div
            className="location-row-media tall wow fadeIn animated"
            data-wow-delay="0.2ms"
            data-wow-duration="1000ms"
          >
            <img
              src="assets/images/common/founder-manideep-gopishetty.jpg"
              alt="Dr. Manideep Gopishetty, Founder & CEO of Brighter Launchpad"
            />
          </div>
          <div
            className="location-row-content wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1000ms"
          >
            <h3>Dr. Manideep Gopishetty, MD, MBA</h3>
            <p
              className="clr-pri-3 f-mulish"
              style={{ fontWeight: 700, marginBottom: 18 }}
            >
              Founder &amp; CEO
            </p>
            <p className="location-row-desc">
              Dr. Manideep Gopishetty founded Brighter Launchpad on a simple
              belief: early childhood is too important to leave to chance. A
              physician by training and an entrepreneur by calling, he brings
              the same care and rigor he learned in medicine to how our
              centres are run — safe rooms, warm educators, and children who
              love coming through the door.
            </p>
            <p className="location-row-desc">
              Since 2023, he has grown Brighter Launchpad into a licensed,
              multi-centre early learning family across New Brunswick, with a
              vision to bring quality, inclusive childcare to more
              communities through franchising.
            </p>
            <blockquote className="pull-quote">
              &ldquo;Every child deserves a place where they feel safe enough
              to be curious. That&apos;s the whole idea.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* 7b — Team grid */}
        <div className="row m-t50">
          <div className="col-12">
            <p className="wrap f-mulish clr-pri-4 m-b38">
              Our educators are certified, caring, and chosen as much for
              their warmth as their experience.
            </p>
          </div>
          {teachers.map((teacher) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
              key={teacher.name}
            >
              <div
                className="team-card wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="team-card-photo">
                  <img src={teacher.image} alt={teacher.name} />
                </div>
                <div className="team-card-body">
                  <h4>{teacher.name}</h4>
                  <p>{teacher.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7c — Culture closing paragraph */}
        <div className="row m-t50">
          <div className="col-12">
            <p className="wrap f-mulish clr-pri-4">
              We hire for heart and train for excellence. Every educator is
              certified in early childhood education, current on first aid
              and CPR, and background-checked — but what sets our team apart
              is genuine care. When educators feel supported, children feel
              it too.
            </p>
            {/* TODO: confirm whether to add licensing / ECE-certification /
                subsidy trust badges here once assets are provided. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
