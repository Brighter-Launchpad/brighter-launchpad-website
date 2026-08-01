import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../SliderProps";

const programs = [
  {
    image: "assets/images/common/sc-program1.jpg",
    age: "6 weeks – 12 months",
    title: "Infant Care",
    desc: "Low ratios, primary caregiving, and daily app updates from the very first drop-off.",
  },
  {
    image: "assets/images/common/sc-program2.jpg",
    age: "1 – 2 years",
    title: "Toddler Program",
    desc: "Language-rich rooms built for first words, first steps, and first friendships.",
  },
  {
    image: "assets/images/common/sc-program3.jpg",
    age: "2 – 4 years",
    title: "Preschool",
    desc: "Play-based learning with individual support plans — every child, one curriculum.",
  },
  {
    image: "assets/images/common/sc-program4.jpg",
    age: "4 – 5 years",
    title: "Pre-K Readiness",
    desc: "Kindergarten-ready skills without kindergarten pressure. Confidence first.",
  },
  {
    image: "assets/images/common/sc-program5.jpg",
    age: "5 – 12 years",
    title: "After-School Care",
    desc: "Homework help, clubs, and downtime for school-age kids of working parents.",
  },
  {
    image: "assets/images/common/sc-program6.jpg",
    age: "Seasonal",
    title: "Summer Camp",
    desc: "Weekly themed camps that keep summer structured, social, and outside.",
  },
];

const LatestProgramSlider = () => {
  return (
    <Swiper {...themesflatcarousel} className="owl-carousel owl-theme none">
      <div className="swiper-wrapper">
        {programs.map((pg) => (
          <SwiperSlide key={pg.title}>
            <div
              data-dot=""
              className="item-courses wow fadeIn animated"
              data-wow-delay="0.3ms"
              data-wow-duration="1300ms"
            >
              <div className="box-feature">
                <img src={pg.image} alt={pg.title} />
              </div>
              <div className="box-content">
                <div className="box-wrap">
                  <h4 className="title">
                    <Link href="/program-details">
                      <a>{pg.title}</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish">{pg.desc}</p>
                </div>
                <ul>
                  <li>
                    <i className="far fa-user-graduate clr-pri-5" />
                    {pg.age}
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
      <div className="owl-nav">
        <div className="owl-prev"> </div>
        <div className="owl-next"> </div>
      </div>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default LatestProgramSlider;
