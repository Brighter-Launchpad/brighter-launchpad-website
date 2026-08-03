import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../SliderProps";
import { programs as allPrograms } from "../data/programs";

const programs = allPrograms.map((pg) => ({
  image: pg.cardImage,
  age: pg.ageRange,
  title: pg.name,
  desc: pg.tagline,
  slug: pg.slug,
}));

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
                    <Link href={`/${pg.slug}`}>
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
