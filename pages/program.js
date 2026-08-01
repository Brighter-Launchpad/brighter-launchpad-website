import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const programs = [
  {
    image: "assets/images/common/sc-program1.jpg",
    age: "Infant Care (6 weeks – 12 months)",
    title: "Low Ratios, Primary Caregiving From The First Drop-Off",
  },
  {
    image: "assets/images/common/sc-program2.jpg",
    age: "Toddler Program (1 – 2 years)",
    title: "Language-Rich Rooms For First Words And First Friendships",
  },
  {
    image: "assets/images/common/sc-program3.jpg",
    age: "Preschool (2 – 4 years)",
    title: "Play-Based Learning With Individual Support Plans",
  },
  {
    image: "assets/images/common/sc-program4.jpg",
    age: "Pre-K Readiness (4 – 5 years)",
    title: "Kindergarten-Ready Skills Without Kindergarten Pressure",
  },
  {
    image: "assets/images/common/sc-program5.jpg",
    age: "After-School Care (5 – 12 years)",
    title: "Homework Help, Clubs, And Downtime For School-Age Kids",
  },
  {
    image: "assets/images/common/sc-program6.jpg",
    age: "Summer Camp (Seasonal)",
    title: "Weekly Themed Camps That Keep Summer Structured And Social",
  },
];

const Programs = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single_box_", sort, active);
    let list = document.querySelectorAll(".single_box_");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Programs"} pageTitle={"Programs"} />
      <section className="tf-section tf-program">
        <div className="container">
          <div className="row">
            {programs.map((pg, i) => (
              <div className="col-md-6 single_box_" key={pg.title}>
                <div
                  className={`sc-program${
                    i === 0 ? " active" : ""
                  } wow fadeIn animated`}
                  data-wow-delay="0.5ms"
                  data-wow-duration={i === 0 ? "1000ms" : "1200ms"}
                >
                  <div className="content">
                    <p>{pg.age}</p>
                    <h3>
                      <Link href="/program-details">
                        <a>{pg.title}</a>
                      </Link>
                    </h3>
                    <Link href="/program-details">
                      <a className="fl-btn st-13">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                  <div className="image">
                    <img src={pg.image} alt={pg.title} />
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-12">
              <div
                className="themesflat-pagination style fx fx-style2"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Programs;
