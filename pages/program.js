import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { LeftArrow, RightArrow } from "../src/Icons";
import { programs, programsIntro } from "../src/data/programs";

const Programs = () => {
  return (
    <Layout bodyClass={"programs-page"}>
      <PageBanner pageName={"Programs"} pageTitle={"Programs"} />
      <section className="tf-section tf-program">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">{programsIntro.eyebrow}</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">{programsIntro.title}</h2>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2 col-12 text-center">
              {programsIntro.paragraphs.map((p, i) => (
                <p className="f-mulish m-b17" key={i}>
                  {p}
                </p>
              ))}
              <p className="f-mulish m-b30">
                <strong>{programsIntro.closing}</strong>
              </p>
            </div>
            {programs.map((pg, i) => (
              <div className="col-md-6" key={pg.slug}>
                <div
                  className={`sc-program${
                    i === 0 ? " active" : ""
                  } wow fadeIn animated`}
                  data-wow-delay="0.5ms"
                  data-wow-duration={i === 0 ? "1000ms" : "1200ms"}
                >
                  <div className="content">
                    <p>{pg.ageRange}</p>
                    <h3>
                      <Link href={`/${pg.slug}`}>
                        <a>{pg.tagline}</a>
                      </Link>
                    </h3>
                    <Link href={`/${pg.slug}`}>
                      <a className="fl-btn st-13">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                  <div className="image">
                    <img src={pg.cardImage} alt={pg.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Programs;
