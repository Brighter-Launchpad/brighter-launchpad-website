import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import { blogPosts } from "../src/data/blog";
import { teachers } from "../src/data/teachers";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Footer2 from "../src/layouts/Footer2";
import Header1 from "../src/layouts/header/Header1";
import Layout from "../src/layouts/Layout";
import { fourSlider, heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";

const Index = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noFooter noHeader bodyClass={"main"}>
      <Header1 />
      <section className="tf-slider-1">
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="slider-1">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...heroSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide className="owl-item">
                      <div className="item-slider-1">
                        <div className="box-content">
                          <div className="sub clr-pri-2">
                            Every Mind Learns Differently.
                          </div>
                          <div className="title clr-pri-2">
                            Every Child Deserves to Thrive
                          </div>
                          <div className="box-custom">
                            <div className="wrap clr-pri-1">Brighter Launchpad</div>
                            <svg
                              data-name="Hero Area"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={112}
                              height={71}
                              viewBox="0 0 112 71"
                            >
                              <g>
                                <image
                                  width={112}
                                  height={71}
                                  xlinkHref="data:img/png;base64,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"
                                />
                              </g>
                            </svg>
                          </div>
                          <ul>
                            <li className="st-1 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Outdoor Games</p>
                            </li>
                            <li className="st-2 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Sport Activites</p>
                            </li>
                            <li className="st-3 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Nutritious Foods</p>
                            </li>
                          </ul>
                          <div className="box-btn">
                            <a href="contact/" className="fl-btn st-12">
                              <span className="inner">Contact Us</span>
                            </a>
                            <Link href="/about">
                              <a className="fl-btn st-1">
                                <span className="inner">learn more</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-1-hero.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="owl-item">
                      <div className="item-slider-1">
                        <div className="box-content">
                          <div className="sub clr-pri-2">
                            Invest in Early Learning.
                          </div>
                          <div className="title clr-pri-2">
                            Build a Stronger Business.
                          </div>
                          <div className="box-custom">
                            <div className="wrap clr-pri-1">Brighter Launchpad</div>
                            <svg
                              data-name="Hero Area"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={112}
                              height={71}
                              viewBox="0 0 112 71"
                            >
                              <g>
                                <image
                                  width={112}
                                  height={71}
                                  xlinkHref="data:img/png;base64,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"
                                />
                              </g>
                            </svg>
                          </div>
                          <ul>
                            <li className="st-1 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Outdoor Games</p>
                            </li>
                            <li className="st-2 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Sport Activites</p>
                            </li>
                            <li className="st-3 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Nutritious Foods</p>
                            </li>
                          </ul>
                          <div className="box-btn">
                            <Link href="/contact">
                              <a className="fl-btn st-12">
                                <span className="inner">Enrol Your Child</span>
                              </a>
                            </Link>
                            <Link href="/franchise">
                              <a className="fl-btn st-1">
                                <span className="inner">Own a Franchise</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-2-hero.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-discovery-2">
        <div className="container">
          <div className="row jus-c-center">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-1 f-mulish">
                  <LeftArrowWhite />
                  <span className="inner-sub st-1">Why Choose Us</span>
                  <RightArrowWhite />
                </div>
                <h2 className="title clr-pri-1">
                  Discover Now Why People Come With Brighter Launchpad
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={120}
                    height={100}
                    viewBox="0 0 120 100"
                  >
                    <g data-name={1}>
                      <image
                        width={120}
                        height={100}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/classes">
                      <a>Play</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Play is how children make sense of the world. At Brighter
                    Launchpad, every day is filled with hands-on experiences
                    that spark creativity, build problem-solving skills, and
                    create joyful moments of discovery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={112}
                    height={105}
                    viewBox="0 0 112 105"
                  >
                    <g data-name={2}>
                      <image
                        width={112}
                        height={105}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a>Explore</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Curiosity is a child&rsquo;s superpower. We create safe,
                    engaging environments where little explorers can follow
                    their interests, ask big questions, and build confidence
                    through hands-on learning and discovery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={128}
                    height={106}
                    viewBox="0 0 128 106"
                  >
                    <g data-name={3}>
                      <image
                        width={128}
                        height={106}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/teacher">
                      <a>Grow</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Growth happens in every giggle, every challenge, and every
                    new experience. At Brighter Launchpad, we nurture
                    independence, resilience, and self-expression&mdash;helping
                    children embrace learning at their own pace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={110}
                    height={107}
                    viewBox="0 0 110 107"
                  >
                    <g data-name={4}>
                      <image
                        width={110}
                        height={107}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/events">
                      <a>Belong</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Brighter Launchpad is a family. Here, every child is
                    valued, friendships grow naturally, and a strong sense of
                    belonging helps little ones feel safe, confident, and
                    ready to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-about3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sc-about-3">
                <div
                  className="sc-about-feature fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/images/pattern/about-us-3.png" alt="Image" />
                </div>
                <div className="sc-about-content">
                  <div className="title-heading">
                    <div className="sub-heading clr-pri-3 f-mulish">
                      <span className="inner-sub st-2">About Us</span>
                      <RightArrow />
                    </div>
                    <h2 className="title clr-pri-2">
                      We Learn Smart Way To Build Bright Future For Your
                      Children
                    </h2>
                  </div>
                  <p className="wrap f-mulish st-1">
                    At Brighter Launchpad, we nurture young minds through
                    joyful play, creativity, and exploration.
                  </p>
                  <p className="wrap f-mulish st-2">
                    In our safe, caring, and inclusive environment, children
                    develop confidence, curiosity, and a love for learning
                    that lays the foundation for a bright future.
                  </p>
                  <div className="box-btn fx">
                    <Link href="/about">
                      <a className="fl-btn st-3">
                        <span className="inner">learn more Us</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">For Families</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Programs For Every Age And Stage
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-courses">
                <div className="themesflat-carousel clearfix">
                  <LatestProgramSlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter />
      <section className="tf-section tf-employee">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-1">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Meet Our Teacher</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Have Lot’s Of Experience Teacher To Teach The Students
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-employee">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...fourSlider}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      600: { slidesPerView: 2 },
                      992: { slidesPerView: 3 },
                    }}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    {teachers.map((teacher, i) => (
                      <SwiperSlide key={teacher.name}>
                        <div
                          className="sc-employee wow fadeInUp animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="800ms"
                        >
                          <div className="box-feature">
                            <img src={teacher.image} alt={teacher.name} />
                          </div>
                          <div className={`box-content st-${(i % 8) + 1}`}>
                            <h4 className="name">
                              <Link href="/teacher-details">
                                <a className="clr-pri-1">{teacher.name}</a>
                              </Link>
                            </h4>
                            <p className="sub f-mulish clr-pri-1">
                              {teacher.position}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="slider-gallery">
                <div className="themesflat-carousel clearfix">
                  <PhotoGallerySlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-service-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="fl-services fx">
                <div
                  className="box-feature fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1300ms"
                >
                  <img src="assets/images/common/why-choose-us.jpg" alt="Why Choose Brighter Launchpad" />
                </div>
                <div className="box-content">
                  <div className="title-heading">
                    <div className="sub-heading clr-pri-3 f-mulish">
                      <span className="inner-sub st-2">Why Choose Us</span>
                      <RightArrow />
                    </div>
                    <h2 className="title clr-pri-2">
                      A Brighter Future Begins Through Joyful Learning
                    </h2>
                  </div>
                  {/*/.title-heading*/}
                  <p className="wrap f-mulish">
                    At Brighter Launchpad, children learn through play,
                    creativity, and exploration in a safe, inclusive
                    environment that builds confidence, curiosity, and
                    lasting friendships.
                  </p>
                  <div className="inner fx">
                    <div className="sc-services-2 fx mg-bt-25">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={65}
                          height={64}
                          viewBox="0 0 65 64"
                        >
                          <g data-name={1}>
                            <image
                              id="level"
                              width={65}
                              height={64}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/about">
                            <a>Play.</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish">
                          Hands-on experiences spark creativity and discovery.
                        </p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx mg-bt-25">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={64}
                          height={65}
                          viewBox="0 0 64 65"
                        >
                          <g data-name={2}>
                            <image
                              id="experiment"
                              width={64}
                              height={65}
                              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABpCAYAAADiOacYAAAgAElEQVR4nO19CXQc1bXtvlXVs+bZRp5tGcvGCNthkM1owoyARC8kZAAykA/kJW8lIXx+8gh5yfsBAj/DSgIZSGIgEMIQcIgDYQZjBg/I2MiWLNuyLWtsqaVu9VjD/etUdbe61dXd1bZknJ+/15LUqq66datO3XPPsM8thn9BnPFC6FqR4ZYSBxaV2GDXOOCLQhkIYuiAnz8xFsEvcL2n45/hzvxLCfDU50MLXBJeWVouzFpYxFAkpV/+q0MqRmMcXT5gzwh/gnN8Ddd7ej+0DlvAv4wAT/l7aFldEbadVS3aKu2Zl61y4KVBBWHV+P9wAGjr5wMALsX1nq3HvsfW8C8hwBXPhcQiO4YvnCGWVjsyLzmocGz2aRiTedr2D4Y4ukfhpcGL6z37j2GXLUM4HjuVgOZtvVvztlYcbTuyih8vLmWmwvPJHK971QzhERoqGWwCqgA8cLR9mC4c1wIEcAGANs3buuZoGilx4HNz3ZmXKmsc746oiGnmx9kEoK5Y/3gufh887Wj6MF043gUIiDNmQSh5TfO23q55W8VCDtW6187pabvsplIHSs3mvb1Bjoiau40qV/K4TxZy7mMF6XjsVAr8kJYAzCVA2fM9KHvO17yt1whVT/RkO0DzthaBax+HHL0FdtfSwIik2kVAMJntD4WyDL0UuG3Jz6dM0TVNKY53AWrgARIgIC0ChLIzEWvboXlbrxOqnngmuZO3lW7zRwF8Bpx/DExwwO4CVEXlUU0UTYQXUzlCeUaf3vbE1OiausuaOhzvAgxD8wNCDaCNAqwccKwpg7z1ac3b+ksAj8RV29UAqvUjWIq0gn5xkc0LLZbZ8JhirQPRCSH7jv5yph7H+xwYBfcbn5gDiL1JHhtgPwMQ59wEYCOArySFNwks5IcEBVJsKOO7bIbLZHhDySH4ztRe2tTgeBegAh40PpEaJSFGNwJqL2BbBtgasx+pqkAkpH9ssf0pdjic7ibIWqbbkHFyDegLGK0B+MNRXck04XgX4Di00MR/Yr1xL+X3gdi7gHo4+5Ehf/Ljpx0Prn93WO1J9fVM3L4M7BnhkI2Res//d+SPFCzFcxBn0C/jszYEaGNZG2WhwMRn8CfBcNaLA2rwTa+KbT4VXeO5dWhvANhnzHp/BfCfH8alW8FxK0DN23oVhKorYT8zZasYF2K+g0l9BhP/kQmz4e9nuvdLAhp7QrzrUJhnnQM5B7pGgK6esHzRgW2/67vn6u8Er286bu/TcRcL1bytToDdC2nhTbrrMLmL8nvGHJgL42Ng3qR6fZatar888c+lG0MsquLqmIrbXBKWSAJspE1DMhAdHsetT94fPGdkr83uttlBX3ANCIYB79gY7+7/G0YDd3mw5/1jd0dy47gSoOZtPRHM9ThsJy+DUDnpWxmQtwPqQP6GomGw/m5jOAFfZKvas8YyZzwetAdlVL39wNe+NK/S9h2hqVFiVenhV61vENq7bXp7vPMQDc8nAdzkwZ7BI73WqcIRC1APa6nKJVDk68DYidA0BzR1nEVDuzA++hBU9RW2qj1cQHufh1B9H+xNdsBusoMf4KOAsg9JyzQX/CNgI/20w2y2qv1Qrl1DKy69g61c9l1x5UmmIRtt/yFo7++a2LC/D7x9P7V5ngd7uqxe43TgiASo9V/1adjn3Q/b/CKwIoDF402c9NBLgOwHGx0KY3z0JwDuZqvaR7O25W0thhx9Cq6G8yEty39ypQNQrN0zNthD1uhv2Kr2G7LtE1p6wals2cK3xXObmanwOvdB2703MZqT4Jt3AYO+gxRi82DPiKUOTQMKmpw1byvTBj71CIqvfJi5LytitkYwaTaYOMP4keqNHSUbeNVMF6+aeRul1fiWRtNIvtZxRguUWD9sjvPBY4A2DPBo7k5wC/GvxK5VMwGb/Ut8S+PHs+7kdj4oLF9iKjz1vQ+g7erKEB6BNc6lP7MB3GW5Q9OAgkag1n/F3ShqvYVJJ5h8OQ4eeR7QJs1RY14w3yCp0rVsVftbqV/xbUtc3On5OmzO6+AuWQCHO94fGyB4AOah+Ccgzp04SG4H1AJcslgErK97DFxbzla1H0z9KjjzjHK2asmIdNnazMs5cBha2wc5m+abdgC+gAyg3mw+vKv7C8Vxvyd469wHZOudtg7LsVBt6OMLYWv8ppnwOBkWkQ0AN5nySqsoJulCLPIE39K4jK1qT8YULwttne/3oUzlOFymDY5/xvn78ovKXq8oK2HF8JQBbNRw1pnbiIceCexO8Mq6UubtfYRvaTybrWpPDmFWXvwpVlaS2SiHoTbzobyEBEjzx2UAfkd7f3Pnec0O0X2Px15+io3ZndDpGgpu7/xYdDTcu3Mg0PX9QNT71w1rYTGYlxvWg9lK7F7mPilzxPJIduEldimtAhvqmQngGwC+c9EboTNUDQ9VO9iCE4sZnCKpgjpsUW/DX4K3wjPShTNjjyqfrHhOdpV6XKjqO3IBEorKKKy2GuOj5JDfkdwuCHPgdGT2d8QHRCJ5m2VuB+LKdfltuy6RuKb+bUn5mgvqHHMhMVvavgciuxxD9vKVNUULn+7yvrX/kpf2/tuGtThqro2pAHlb80e1cOzXsaHA4/Eg7uuQXOdDrMrcN7Ylp/B0uIuMLAHnX7zwNb9cYWd3rCwXUCxlPg8UutqnLsRT0n9K93m/LdXsfXXsmbPX2UXbSa6jiTvwilqFRUO38S2NL7FV7W8YVy9GmZR5C/io36QFE6jGINIovsCk3SurL11QIk12fyglpSKkGm3aRAeW1J49jzH2ziUvdX12w1o8esQXZSZA3tZMea/fCS47WSS30DZmt3EIHpP5khtWYT4wAZDseDp0ZW21y3bH6koRZjk6b5TjYEqStbZIQC8/r/Te7iH+rcYhQKgGWOYNZ/veA4JZDd2JaxWkIbhKf8i3NLawVe0jsEmvc81Ek41bcFPo6kPGKL3v8dqLl5efayq8qBbGvvAOBNXUh4KhoXqNGIh4H77kpdGRDWvxvKUTml5UJj5Dk3L6XiIDM/PNRvJbjXGMsBr8Xv06zqsUTIVHscl2v4bJ9t7MYuBl30fYt9TfGgKcbHd5e3ThyWPLMLbrU4gNLdPUSLEKLaoI7IDfM+fZrpLlr+wVXEEvNMWH4PAo7O751CVUl72MUd0ISdN3PGqSQDTD8Bi8sxmcq1Y0VNoyQ3xhNYjO0BbIPLM9gYlYUHWasKPv+XWXvISFG9Zi3NpJ02EmwJsytqjmpjtXhy2f6P7xGzHLbYPbRG2S8D7wZ5/To4556AnGUF+mpXs+0RCUDicGN74KoWQepFoBzvmCIDggaBFuix1c6hrbd1Ft33p+cmQf7gHwkxX9JePAMJbdN7joVEB6909feZyHwtcwd0rCXbZgMA6NAuNh/O2eikCNfXbx5K8517A3vN1UeAlUuOvhtBXXRuTAzUfqjqRNKryteSmApuSG+L3mURlQTdQKD2VuMwPneFc5E3XOTOGFVI5dgdwGWZGd4emBFYC8YyKFxDmCr5yIwbf/CufShXCdJMFWI0CI2ySCk8FWJ0BwA0Wns6KiVYyMlx3b6vyJaEE5gC3ntt6zSdu4eZyHU4yWWJ50PYXUdh+AHmVbXSmbqc5huQ8RLb8qLneRbYdP5d0xCyZbBfGGjBvNxImvtZEBQJvEKrCoPvvGS6AILpgxw/YHOSzkVvGabwWg9kDnyNDga6vA6M474GqyQSwzccJDHJGOCc3hbADcy0AO5cZtdf7GeJbCHZScP79gza1vjb74TlR9eRPUVzaB+wMZ7U1cMz3oewB/UOsrqfmK5Cr2OIRMusyI3J//onTSVBn9OfmSl1Bk6YBJmCzAT0AsBkS3/g8TJ3JxyuEh8MgLk4Rmba4Y96v6IyGZGJGDEQvSA7Az2IDhqMf4JxyE9+/fhrNBSo64VCheDaH3FGiTsvDuZYwur5S4NKVBlhxmPkfRRy+4+L+GN7OqHu7PMRWFIlA3t2NT+aKD596xfvsldzz5U67aTYwDIKhZs2TZBIcn08S3gOQt5W3NNLEvgq0a0Ax1wlLuOB8PQ+vr0HjoEfDoG+CxrdZikkE/WNRc1dLICyjWBChzhn8MLNHTO+FNs8CKqiBVZD4Rio8jvEs1SBCTIQDOxfoNO/l/PGm7nOiGVze6sKBCgsqEmTeddfPMG06/8RHVH34D4agfUVlFMMIxMKJ19Su+7825dPf5tz/tv+Mb984O1VaeMu6TbcEwyxj+shbVnXcriCpJNXtEjn2qEXOJ/ptGYDzeyGzpPFp5X5/gqCx9E3zHakutR4Jg3l7UsvF2DjTySTZkWOUZVmc2hGXgqb6P4Br7nxHYeT2kCpOYggZEOhXkatRRDwS3ALU+9gmbyGCXgNNPsCGmcBzyq0Jb1fxrzrjm5+QnLtM5Oca08tkSB2s6sUoqbykXMR4D/toZgX9IxqGeakTrI3AIzon7lMNwmYxAlEovQMM1K9c1F1IfYSMgKE6oYsE+yUjlHNEtHXdDU+8Ez/GIUfCXYqADB2Vw7ZclbPQ0WcWegUj6QxazKj0yCsLAimdewYHVu/uj++dBLM0UoDLM807LZNRQkMQdQTL1QXHsNbNtqPEkbwfRACh/1DOzWLz33LmOppbFTiyulOCLcLx+IApV4QiOKnjjlUsxEOtOO4fV0RdRxjEa1ufKIw6tpUqoWR8fKU9ShgAJmnaqUPOX2zRv671Q5K9C0/4NjNWDMycOFDG2o1TmB21DGK/fynuV+/mfG18QcbN2yUbc2+7n91c7kPQDVYtdJn6KOxrALeHHuV/S6oKSA8xmYrj4rDVINBtBY5KSsrskMJw714Hn90YRkjXML5M8iyollMUtZ0XjaOtXsNur6AM8MCzrz+nhnnpsPdA35pznKa2xzzL6wa3FrQ/62hLplbut3YlM6BLibc3EXaiB6AFSnx6B6ULU0s3qj+hfVT1BY/92reWZOxFW74Rd+AIqnG7uFEUwzIKszYIcvZItD0TUvb96NnTRH+9s3fDpro1edeHyUgHldqZXBuUD1e11jnDcu/vHkATO3MvKEQz7wMT0WANBC1kb0nSJTtK0KWkimo9pTrxwvgNkfKcY4Dg0pmJzr4xgSn9JfSbw1J8/c/uMf//VD/ui+91kkVpxH7zBbvT59SjWHRvW4ogpGokh1mz8V5EuQBKUyz5ZgGvC6xe7XC0dYe3Spz8CWXsRJ1eVYGEZMNlJD8TI9Heyenere5uv9dErHn3mi39qrXtdtlkymel2vT/A4QqO4gtDz6iYtUh0CvsgHt4MLXaSrg5TMdnqNIPiS14isX0rE9PI/lEVFU6GcteE5EIyxzuHZfT40y0iTeUYH0neE623t/ZhzvnzIWXsLVmMlufrw+D4XuwefJ0+3r1hLX5g5V5kQ6K3p+q/pXIjq54C0Z1hJdNtu0C79OnlENibWDOzBCeWZwqPHumOuN8oCWAfqUSpHVc8fMWfDrlHo3kn7JgKbOvjpD4jj3/wzVfF6hkiGpuB4nIUa09DGc5Ul1amnthBQ8gvnKpuSbX8aB58uTsGf9QwrDqGFazviGQIj0DC0yac11fxWMPIdxb8scMmOmePx0YeUrSYqQ4NxnxoH3gZuwZe3c65dvGGtbg1f49zIzECl+q/pTJATfdfyBJlkgiupFyIJn4MCr8QJ1faUOvOPEFIATYPAGMpFgUD2CkVcLzcv+SRlkdfueLFz90bE4VvOUSkBREjilHevM/HR2Iq/vTd7vt/f7Zv65tYsRaQI4B/GEV1Q/C/8zrUunMgxmPsZIHmM2nJOAzsA/50kaw8f5p68UmVE3O8QzRG3IY9EbhtDGPR7I35vWnyeTrx4da5D5AT+bm7ur/wRW/wQKuqxS7X1Njsc4aGak/z+SorNLgkxkSmVZwIWXuI/1rZDn/0AXD+lHiLYi0qMgn61fO25hE9tFRxKRDpBkLpmWglEIHim9Dr4vbmkNT2MTcumIOMyDQJb2OvIQkzdAXA23VC7udF3Pz7SzeGqvvHsWo8hqUjYR71htDDAYpTbcf1HlW7tuF+eEq/jNVXAj17gPZNeqOBDgf8p/4DjqWlkKoEqGMc4Z05hiAH9mzX8OM1MvpmcTTX21FfMqEudwwqaOu3Znwc2BHUjZg4ZuGxBlONoj1UdjFs0h9RtqAcJYsB5wxAsEGvtvG9B5ARI2vgwyEfwvL3AfxMvEWxzhkhAfK25jqKdun/VX8SGH8PCKeniLjGET3sS3JD7A99Hax6IbDCJMn6Vh8wlCM/GFHBX+ijG7pdxM1N2XcEtGsb5pE2Q9M5NtTMAba9CMT5njymYfBlB2Itz4IV5w5ikJ33jwEF950ho6JCwOpZdn2UEQbGNbw/KKM/D1M7FYrMsXdLAHJU24zHGk417fu60m+grOYe1J0HOExqbyIDQE9y8IIPBYHx2GsArhRvUfLmxhIgHbLE+MygW6Fm+TaBQfQ4oI5HAC6ARWqACmdma75obuERKP3ulmhlgZNV/GKOiJsP5Nj7uyitMoSnysBw30Sf7ALclb3AuuVQPvJtaKfcoDG7LT00owGBw8CP6qJ869kaO2WGDUurjevrG9ewY0DGQLBw90uyMcxqdGN/2/hifnXnfDzWsC/ttL8rOR8lFT9C/RWAaHKfokNA/4tpm1iVB1zWzkZUeUH9kXSWeIuSvJG8rXkGl9X3Y95AkMtqh66dgOcAvCHFmVVp/p9pp0tdUINRyu0YCVqXiY/Yby0RqgsxqKu7Ru3aBspJzU35mRP/oc8rsWilcYy3Nz7RTcBzUgVEjx/K4A+h/PkHQsy5EnLFReOKa6lfDbuGXy72DP78ynmnwy16XBLD4koRB0ZVfDCkYDh8dJQUd6mEugWukr6u8KO4unMNHmuY0L8O8VHUnsVMhRfoAAbfyGTXkY1Q6QLvDayK+4X/nviKq9qPmE2sYqJQxWV1TnztAEq2d08IMMnhMCeqUWZCKnZCDccfcptJZHrMYghpZjvYGe8C5cOPASiGKAEz5gHOIsDpjv/1GD9C/DzDmXR6wSnC3ZhqtfdBHf91kTIaK1Ll2Ex/1XWo77sIvbMWIww7HvsgYinzYRWV9Q4Ex5RT/UMyuQK6Ran9tvjjKK6ugntWZivBbmDg1eytOyTAKZH9cKP6I+lu8RblEG9rnpMj3TRXmBiBcXdBsGXZF5BKXIAnbIQIZTMqgkXmXNciIFAKCKqRCCXmGrkI85cDMxcCFXWAu3hCeARvjlKyFIhFNjjqPXAvLcc3S57B33pukLf8uCGw7oGW6NyBzoc1jXda66Q11J/oht0l3IKrOz+qHyAJX4Q7M8iga4+hjXnbZEZRPgWhr4tv+mEu/q6QpE8kRiDLoUoFBqncA62yGxgxsXpjFgwoUp1hDfyNCyPgwgZ9G+UaD+5K309TAKLGU41D55bUaiPrCMkQ3jposwVDzhUH3r5i/XfXfLb95trF8Yf2Rip80cu4jwKCyDB7mYcJInsYV3fWQGSL4DAxqmj0KRauYSKBcBpvaz4jX7KXBKhnFJPGi0lyMhXk2PMLXwAO+jNHoZJ/XuH74/k2TXwUTLvKqL/jwO53gZ1vUqw13g8JGOgG3n8N6M5NsDVFIAr29iHogU3gGjY0QRzaeWPNoZ031ty/88Yaqlr6WOGNp8PpETFzkYtM8gfBmB2SJ3OnsMVkQ4IhLjDSwb/Ot7sUpxZMjFLRxDGfBLFhDNrMNghvScCqWsOqDFsIg9DoO6A/hWQm/6ewrjOmXdvQCuDvVCiC3i6DXdZEprcLWHK6YTBNHp35MBoB23I4oRFuYEN4IscRL8X7U2b2JYXNDrWH9L/QB4iKRZWDqHaOoj9QjP2+aoQVY/phDBceDlcdOoGZLGcTtbhGQjzCzxbOomE8M+27TIq/OiHAxAgUS/Oeg9wK4VN/A/9JPdiLUcOgyWcdKBr45mGKTpOlc7WIm/VJLS7Ey+Pq7FxKQ2Hf+8CSeDnFnMbCBDgcAtvam9AG32RDuZfJ2nljjbzsvsFn42y8DPTvDetO+5fP2IRbz38Fc+pkMJaYkhgQG8WYTw2+vbt6652brnwsrDrPhBz4JJx1k64/B00jBZyWxSjxgM2uzaS5Zd7isZQRGAeZvsRT0HJHdpiTgd90P/hvPgs2ZjJppyIgg28Zob/k810j4uZNqV8L6zpD2rUNRE+nOfFs3RJNwFtAnnMwCPZer5HCAH7AhnCvxSP/bCbAcZ8CV3AQB773B8yqPwVM+myGPcGFZ1Fac9BzYZX/rItOvLMZY9HfcP9BjuJF6ea8ajFSFtMgrGhI41okz5XJYR0TkpxIltIxyRo9QygRoH3pAcjnPQTuOpzup9E99MXAt/vAXxvchoD8NVo/brLwkm2t6yTexRXUKV19JtBnsZClPwC2LSm8dWyooLr2f8Sz4klQwpb1HsaeOx7A7DmXg0kLMo1BInklinkEEbxmloSyihsROjCG8CS3x0qkPRgDa5hDFVOmX3M1YwiOpXjjKQInXkzMmtkulTihrNiL2PwdOsecjZZBeH/BY+IvVv8WUZXmlv0ibrZKIKVJqwSO+Agky3PUWhEs80VS1Xh37r3TsfPGmuiy+wY3pK6H1t8Vxgdf+RlcZa3G8iaTwOU9QOzVjOwNlbSxOcEyvu/vKipOFlE0HzBoE3muXANKK8BqsmSjaP7LnANTBJgaGbDXAAVY7eQf0rwojwTBK4ahnjN8tXrOu52ulo7brbei42T9SXLGrTiro4+6X2RPfQQXJT7c1f0F2nxWVAneyLl2uiBIlaoWQ1gOjPsjg3v7Ah2PxpTQUwc7dUNHFyBlGz6/6FnUzWgAhAzOLjiVuEVfM09/MAG8cgZYNCbynq1hjGzNv0SXbrg4wOZmX8CBm9MXRlNGYMoOtgSF3XrYQixy6tEaeXhcD36TlRlev5gSpl91tXRYjbCv0H8n5sDDeyyfH560vOWJMIS3VNOUB8vtdSuKHAtB2XLK9sW0MBFviyrc9XUnlDau3jv8zk+1hQseOrSnK6YpsPd2hvH12zYC0lWZ5yGlEn0j972hIITTDjanKsz3Df4DonA5WBZnnJLeol1jJ81lueo1ubmLNpQyAlN2oLgo5QaVwpYHo+y9va4MsjeQyOITTb8hvH7xp10tHVZ04Sl6WE20GaozZLFKCOnLCgJYeFf3F85zC8XPzS9abnNOTt3rVA0V/bFu2EQnTqw5W/TY37+uZ892pbdzEbisoK5SATOrxlK2w5yzmAKyP0iLqP4KtrD2Qd49dAOi6vXg/GJwXg+NSzymBhGMvcfmzBxl82beMLk+I/O8pufsIQGSsvRkBFcdJxQsQMS5pPbaUij+EBQ/ZS/4+bRoa3j94k+5Wjpey3mwxk+FO8foIzUiZokqUQyReKyKBu/88hKPUPL3xZ5VNsHEJ/MrwxiS063bWWXLsWD2Q1JwpF5pKFq5jUmOU00HhLIvc5sZpKRGWCG0Dj0Vr31Iq3/gbc2fixeG5l0HNcsIPCjpy1npApwUiLafAAR3WuvsZDDKXrj1FBTNi1pEJuX+cnj9Ylph8Duulo6MJZa0axuoWnKJPure/AuQstISLVjG9gxHofF1fPUcB2zCZ0wvmkahP4rnvrMG893L7WbC64vux+HoXlMVeFqjAKH4p1KdKMwBTNQnH89fC5nAhOwzfCze1sziwe8fWmsM0GTTEXhI0M12xPkGqbDVWXkwcoKoGPaaEthrSyA49fQFrSy4O7x+8WfD6xdPHkpLk/NE0G9YXCS417uj7L2+n2I8No8dkL8sPNJ1XZx0S853OorsOHxyLWIrmmBWr9Af7cbhaFfW+UsUJJxQuhQ9sWCt2WIKXC1AI01UdKWtYMHbmslCe7gQ4enHyaZuiC5Aw8ad7LhTLNJeZ3ZQwRAcNkOQdaU0KuvA2INkvYfXL/5kUpCB6IXJdg3BKUnBDeE/2BCS2VxhXeduYV0nRW+IjNyWPM5jx56z56DMlskUoEJLY+TlRnXRfKicYzzq0zJZwgXQVibKCd5LfOBtzUviFc/XFHIPySjMokIPCEk6hRml2TmnkPPkBXFMbZVFcNaX098lotv+KBMYjcivQlavQl+As40Huth7fT/HeGzBZMFNhrCu82U96UupF0Ub424bDjVVa0VCZljTG+sBt0B+dkpFkAQ7Xh45KOj1H6mwSNiFHAVi+v0k++JZUpm8rfmrALYlCWQFgJuXuw25WjoiUpKTT1Yo1QCKKZF0BwnwrYLcCUtgBkWDfshn02LKT7WvuBQu8W1cqHmaMfaw7Zy2g9ma4m3NxVzjc3hMuZADFzNRWA7GitW/KAjP8wiSSU5zrIBiVLJM/+DdjctqtkYEZncy+0pjUtOsxTPZaHKB2R9DKiM1tp74tIXfKAOauQB14pKUFrWQh9MFSJkJWxUgZ654O5XQKfy1+moDK+M/3+fvNXPOeQwaD4HpRSYCGHMwBoozSRQ4YM50QWlnF8FmUr9NDOyIWYFqFqiagpim4rnhfXddUi3czmNbjRJznn/lCgTHjDkcwmZIJeVx/kpOFyEftIjpyNcFSCp0ItyhmDyljrmZ244FGAX9mYNJQjkThWomCpVMYEVgJqyrOMhoqoiGoU3izsg8Cs1i7YiqyZBVw9L8Zd/2J6Cp1+pOmG595tFEVErnpSVRXJ2QiEeIm49WeNDNE9MR2I64ANuTmxSTJb9cCz+URQ0pdKSMWSzhjoN80Ln+EYwp6RrDarEJwRfuRbzojRrZJdQ+/RAYWwo5ZhqE16HE9HXZ2LB3BGKxH4KjQY/pTgF04Zks9UVUVsRV6L64eeUwVZWkRsmpz8+Gn1KQ2lDGwpCKXcb0E1UgEOknM8uSBI3A+SMjeCvYjpKSCojxuVApQICHx5LZ/19vWGuEXISqJ0hdrda8rScgGroOmrYanM+AHFNYJOxHTHODSU0QnEf9mqDJ0CJZiWK6dSuwpk1qXPew994AAAnTSURBVE8bRoxisoyxe8lU98sy5JFxRHp8iA36s6mSJARavVVTcdrhduwKbYY/rlGCavalmVMxHDqE0bBu9PaYlXwJVU8cFk7Y8N9s2P85NhJ4gAWiDLJwHph0Ohmw03H9Wtj04TvsaunQ3b/EfLI5WeAS66UwSvruVPcmlmTUTUwn4gFxPQJBKSvR7cioGJ4MGoGEJb5B9Lu7sKPSuuFChSe7B/RIH13kVRvWpucHeVszzSUt8ZzlmmOxXDVNI1ks0HcTHxICfCs+4RoCnDziSG15mgD/69PZ33Somj6nOWaYUlXMQZapwHThn3t4L5yKjM21s/LO4SOhHuwefA2KFqUA7Cf+Vtm8A206Y51Kyc/RWQImIbHphhrKqj7fTnxICHAiyBztMybNyXONawEQbDtmo5AMv8SIKgR6JVX8qT1j4CAWjQ1jY80MdJdUKoJgS7FgOQLhPkT9nSiNjR76mmvW5rNYWVQdo6U49BK6/OyuaYYWyhr5SRpUSSnxtubOZCK04mLAPjPzsNCeYzYKo72jutFCyWKdC8KYecn3JNA8ySnwm2q5EVVPFHpkl2NPlGv1IniJAyiy6QuSToBKByif6aiv0Efyhwl6gOkemID8mQqKwmBSjfxzSQFSiZmZAMmlCH9gOPzTCCP2p9K7q4x6DBhq3Dkrv5GnW6oOU0HXi1yrNyyN3MLJYegeM6jjWUffxoTwMGkiTr4NDJED5r4HXVlx87T7hVrUsLxs5R49CO6oK4XjhALmwiOETlugazwOJJh8cDORVtaUKsDXk2/ootfdyFmW9ye+jGuR+XdTBC0U0+cysdhJaSgwuwQmTLvRp8+dQh5L91hADUWzcWAQj6smkbwrrGkTPfaPJ78J5+CjFJ9qrGk9HeDcEKDIjMrgQCSXNTalIJOdWZhnpxuqP2vMdberpWO3qQDjeDD5KbKPnDDzZoj4W3r2tKhSEhYFn8kQobJu/afAkNqRQDd+FA2i66hDl0fXj4iczfdDnICchsmPG5mnu3VWFxFRSYjuxeZNOWZQhSUQnNq30KiBiG6IEK/mWEINRnQ1LThN1647ZlD8WSkb3OwVeGkjkDVtop1+kdwQzrOcctFKwFY7ZdeWePrE4iN826nTAV5WCl5ZAV5RDhR5ADH/nEYjj4wGsdjxob6MSL9+89QR4RVXS0cGUdbMMliX5MlQcDuWgw1IdPzytek5xCMFB2RaCYMxQ22OhnJN5OmQJPCaKvCqSkNoLifgdhnCrKsBinKvK0QqmkafdKQPzhSBrjkHfm72VYYAWdMmSjv/JLkhtCN374g8VHYhTNfULgDKaFCf92zlbggum2HAZFcnExBFXXgwX7ZTfyB4WQl4SSbDOnkJThtsFUXmr7o+RiANkGPu25Pm5qX2PcsBP4vTDQ2fUM7D7beVA+UfNV3hwgoUX0gXmFji0hnedDPJ7yNqYj7wirL0UuxsIAFmETJRO4QP03jhPN/ou9fV0mGqjkyvnDVtojzMnfHWgcDm/J0gBlvZ+QULMTYwBiUQ1kNXWjiWTHqTSssbzrLbAIfJkr1ZwIunyfU5SuSZLohKl7XGMdej+3+ShCfKUIQtMJIp8VtW2EhMcEdt1SW6Cs0RgTA5n3XhHdH+xwDkvpD2yYHvulo6surWrAJkTZtoAvqP5IbA23mLPnU4ZgLll+RddyYBohnSHESuA/0tRIDcgoWZBlK1x0OgMwHO9YR1DlDeL+ebXXJOHqxp05PJ0I0WBvz5l8nQYa8GKlqMApkCQMK0VRag5szeupIP5vySDwVkdXNzyjzift/N2ea+BKwEGKnCyEg/UJbCar2EVAxUXF4Qq43K0wrJATLzVR2zI3ZsQnJWQJomR8aB8EtXS8eWfE3lFSBr2kSlup9Pbgi8C0StVe/qiweRn1jSfMQWak5Eo1nfKmMGFpz+kJwV0Kijop8cIIPjf1ppy1KInzVtWj/hG3Jg9OXCcoJE0ai8ckqjNkZXOJjPGmFJF/ZxIECyNmND/lyqnFTmda6WDkvvUiokR/PN+GIARiWT73lzBls2EFGq8jKgZPVRO/1piETARkZzz23RKNhw4bWOUw4yWryBbIUqCdzhaul4w+qpCzLJeFszWSWJdyoYlibRL6QC6ZBqCPBvAqK5VposEBROIz/PQdXFoiHQmAwWDAKho1pNa2pA3Rny54p1Ir7g0aWulg7LllbBNjVvaz4hToJaoG8gIZIDbz8C9Ugcm8Ama0tw/DOD4rzDgXx5TcocnOFq6ShIVRyRU8Tbmuv1xb4TQiQDpeRMwDW/8MaIBTf6j/93hcg5Yt5xI8qUHUSJP80s25APR8RTYE2beuJvNzGKK+nmj71qWKi8QN+M8orFpm8p/+eHxhEbCuQTnj+uNgsWHo6GXcyaNvXFCa/GkpGkJ4L0Wu4NgFLgyyjdJwL2Y86bnVaQoRIdGMs355HwLnC1dFgINpvjqJhCrGmTP043/9/J2qvYADD8FBCy8G7dVJSc9qFUQU0HiFVHQfocURakjLx3jqYLU3bHeFvzBXFOzYQ1Yyf1eDpgs2iljm3MzwI4zkE5zDypIQJFQi52tXTkSbbmx5Q+8rytmVZm+imAT09sZQavxnNK/rVIKd469ETmihn/BCCVSYHpPCoT8UqwK1wtHVPiQ02LzuJtzWfHk8LLJ84kAS7jPah6nDQbQrsB/5vT0a1pg84eoFGXP1BOy4t82dXSMWUhoWmbdHhbM0Wlb9Df/ZCqVumUzrmAa7FB3zdL74y9AYSndG3yaYFehDoaykWFSIACn99wtXT8aqr7Me1WA29rJqbQF+PvOUhfi5/IUI75hkBpgb2EMOlJHt8y5ZTFqQIJjKqH87gHCWyMxzbzL1JzBDhmZh9va7bH50Yaladn7EARHaJlUMBbf623BvieO1bdswR9xPnDVuY5xJ3z/0VroeXL6R0NPhS7nbc1L4uPSlqxyOTFQscPqFLKyN1F8rkFCRA/4j4A/+Vq6bD8DqQjxYfqePG2ZiH+8skrAXw8/rqdDx16aXM4pscu9Uopa6Hl8Tgp+ieulg5rL5GfAhxXnjNvayYBnsVV7UownMUEofKYnFcxatF1ZnRUtjrSEiBf7n4AD7laOqwt5TSFOK5DH7ytuUgNRS+Exq+CwE5jjM2GKNh16kW2dUOztUWLJqiasWYPCYz+xlR9FUBe+AuVSGi0BuiTU+GMHw3+qWJX4fX6W/xPosg9GFvJGFsFAY1gzGVwSFmaL6YLRtOORECpkOOLIW2M50JfO5YqMh/+6YOP4fWLyd8k1Uu5LHphJKW46N1IpH7ph4wkWjWJwkCT6dek8sjoID+NikAoxEXCoWwLVWmR4Lpy8TI/VAD4v0NYRZGjjPfEAAAAAElFTkSuQmCC"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/classes">
                            <a>Explore.</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish">
                          Safe spaces inspire curiosity and confidence.
                        </p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={65}
                          height={63}
                          viewBox="0 0 65 63"
                        >
                          <g data-name={3}>
                            <image
                              id="balloons"
                              width={65}
                              height={63}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/events">
                            <a>Grow.</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish">
                          Nurturing independence, resilience, and
                          self-expression.
                        </p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={63}
                          height={62}
                          viewBox="0 0 63 62"
                        >
                          <g data-name={4}>
                            <image
                              id="open-book"
                              width={63}
                              height={62}
                              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABrCAYAAACWlrdIAAAgAElEQVR4nO19CXhcZbn/72xzZp9JJnuadE9LG0AoBSHVshVElhplFVrcKqAUFxSXW0WxV9H7F/X2QdQCYisIZSmIIlBACpalhSJQUpqUbkmbPZnMvpzl/7zfOTOZJDOTSdoEKvf3PPPMzNnP9573/d79cDgMhO6/6geaoi/VFG2qrugeXdUlXdONA3IAx3MaL/ERTuTaeZF/lRO4e5yXrn/2cM75f0gP7/gQffTqP2qK/jle5sGLHDiBB8cDugboqg5N0aDFNahRBUpUZcsIvIVPCFZhC2/hVzkvWf/S/9FhfBg34dTNK5oAHFPo9kpEQTKQRGIgmSaiaBfbBJtwk/PS9X+ZqBv8T8XhEG4fgKnDl2sJjbgq/T8ZTEKJqLCVW40FOpAYSCDeG4ca19gi0SEeEKzCZc5L17/yYSdIoeCP5L66oiOwO4jQvjBSc52W1BmREv6EsREHWLwWuGa6YK+ygRd5KGGlNtGXeDl435Ubww8tEyfr5o9mjJnj5m3ZsYyH/t/z9c4plQhyFXoQUxDADL0P8/VOWPwhRNqjkJwSHDV2tk/4QJgR0DXTmT4Oic1kUIGt0opYVxzxvjhbLtiEfskhLnJcsr7pw06cfBjP0+3UwNX8Wy3F04eI6TyQbRa4PA5YLBKO9XXgXNs7OGfvVliCSUguCZJbQuRQlHEhxxvPCs11akxl/20VVkguEZGDEahRtUhPam+FNiy73Hnp+ocmayCONoxZVD6vrE2UIAJFUdHfM8A+Ha3daNmxD6172vF60of/cZyFy4+5AY8rdWwfXjJOk1JKCEQ0wSqk/4sOEc4ZLuI4aIouJPoTG0IPLPvCh44iBaJgwqmbVxSrm1f8zofInd9Vn4dFllBc5jVW2gA4gEAwhN1N+xHoD6FXcODm0ovwY/4saNxQiczMhaTGiJQJMiucUx2MiLqmcwl/4s7QhmWfnexBORowKuHUzSsq1c0rfgKgBcA1tOxcvQUXYhfKq0tgc1iBKGkhANyAbtXRtq8dvV1+tv9DfD1utZ3NfqfEJJkGMMyBwRPpQLgtAjWiwlk7hHjrww8uO+VDSZ08yKqcELEALAXwKQBnZZsLkxBwo/BJPKtNQ+ueQwgHo0M34IDZ86dBskjsJJ8YeAvfcmxFGcJsLkuGFXjq3OnNY10xxHriTNsUZJ7Nh6SdMpEqC2HJLZY5Ll4fmbyh+WAjTTh184rjATQCuBDAianlJNJI+yMPCNldumLYXrxFgFRuxzfdS/GCPh2hQASRUBRK0uAmySKipLw4zWWEWq4bX9BfxFlv74BcLKdtO7L1wq0RWEtkWMus6e3JJgzuDTHRKrmlF91X3vvxDzvBUmCjqm5eUQtg//CVZHuRNpgCGdaCLLC5qcVdjd94luL2abfi9D23IKTml7qz5XbcOeX38PJhXPX8cvy55FnwAgc1riK0NwzRKcIxxT5iP9I+iUMJsk8+33np+ieO4P0ftUiN9kEAt8GYrdLgRB6SU4S90gb3bBfcs1zMNvtb2QL80Pc5VHorYOWi8Al9ee/fJwSxtvr3cPMR3NRxFV4rOgbn9S6FTvNaa4Q9CI7qkUQjWDwSuwaCGlXu/rATLAVGOGHxWlVYvPZGAAsB7E2tpAFz1DpgKbKkVfp1/In4k/08HON0IKbxiOkWVIu9OU/AQcetlfehRAziux1X4qng8ZDtInbJlVjacR47LjPUM2ZbEpHE6eRxIVjLbexbiajloQeu+taEjshRgiHyTVi89h0AHwXwQrbLf5abibvlM1DvMgby3UgM+xMlmGs9lPNulxe9gFPtzbjXv4gRLQWXz4pteiVu8Z4zOA/qQKw7jsB7QSQHEoC5nJQVucjCfisRddWHhjp5MGJiEhav7QJwBoDPA/gXeaxIhLZynnd+IJ0XX+C2gwOHqKrhQDSB5nglFtp2Zz3DbLkDXyt5Ai3xStzWfeGI9cXVTtzdMxOPx2cYWuT+MGLdMVhcElyzXGliEeRSmXGlGlM9oQeWLZ+c4fngIqvLS1i8llTHe8wPw7wtOx5d4LTPl3mD1rujMWa6vRadiVVlD8PJxxDSBjVCC6fg1op72e+bOq5EXB88lVPgMdUm451QFN5KB7588DS8Yt8Hb0xlYpPcZJmg2B7HcbB4LExhUuMq2ZXrPmS0GoKCPCfztuw4vcwiLq2SDQ6Iaga3EV4MHwOR03CB+/Uh+3zV9xTmyIdwW88FjOMy8fWp5dhw3AxUyRJsbgs4mwWXJy+Cvdo2hGhkipDyEmgOItoRhexLiUulNvzgsrojPhpHEQoiHAf86BjHIDftjcahmb+7FDdeiczGVd5/gYfhizzRthefL/4n/hWei3v7F8Eu8PjO9ApMsxkDv6GjH7fu7UBHPMn+E9ftirnwO/6k9DnIuxLcE6KQD7PtbOU2ZoqIdoHNhVpSu/XDR65BjEq4eVt2nFAlS4vdoqmS64PclsL9/gZMs3ThIvdrsPNx/LTiLxhQ7fhB52XQwTHOWl7pwykeI6zTHIlhfXtvmviCyMNTbsdP2o9Dt2ZjthvNd4KFZ6EgMsw50VBUKJZHUKLqJyZqUI4GFMJxK2ba5fSf1lgSSV0fssE/Q/Pxbrwa3yz9G75d+jimSL34Yedl6FYMl9buSBwf27YLD3QMtfcEjsPiIhesPA9nsRWwCLiiawkihyLMs+Kc5kybISlQiIi0UC2h2UIbln3yP5w+OZGXcPO27OCLJfHTHnFQsTgQS4zYTgOHX3ZfgGIhhEs8L+OxwEJGzEz0ma6wTJziceC3x9TivBKDwMVVTrw+4MZztScY7rBMT6oOJEMK+xZNg1xLajdOxKAcDRiN4xqqZak89SeiqhhQVCQDAexZezf6X38jveGrkVnoUVxMRN7atbSgW986EMa3m9vwdG+A/ZesAlwlNny9+1QkdOPSNEVnDuiBlgCLpCcCSVjchgKjxtTT/gNpUhBGI9wny+VBLa8rYXBNrKOTfaKH2tPrLva8wrwjt3RdjKBmK+jkiq7jiZ4BhFUtvcxdZkNUF3Gt/wxm0wVaAoj1xlkIyFHjYLad6BJT4tIa2rDsrCM+KkcB8hLOJQoft/GDm/QnVWP57FmYetUVqDjHGDNSSFaWPIkt4TlDvCPjAdlrxVOceLS7CtvUStgrbCz8Qw5oSm+AuU1KXOqKtvJDRjOGnISbt2WHZOO5BZnLQqpBOHAcHNOngZcNpeUq74vwCFH8orswETkaLDaRcd4Xk5+AWGQBJxiTHXlXSOMk2y7lJlPj2uIjctKjDPk4bpZd4OXMBWR4D4eNT+BzRc/jkYGT8V6iPMeh8oM8KaRdZoLmuiBvw0r/6YxgNM+RIU4hHrLxBKtx6WpM9YYfXFb9IaIZQz7CzZGG5Ypo+siNznO9AZcQw9q+8U819DjEszwUJDIf8k/F4wfLWXScxCPlpJDoJHMhlfqga/rnx33yoxQ50/NKxcC0Y60DmC0ZCokOHvtlDrvilYjrgwrL+a7t2Byeh4PJ4nGPQETV8MpAeMRyCrQW17pxQ9s5eHn6ALy2+JD15EUh7tMUnYzx1f85ZBkdOQl3pvLssVfYWmJuSRNkPsHZhQi/3JnkVZ3T34zUqv8ILxBfjczGQvt7+Mahq4/oRbkEgdl2pHGGLIBtiheX9V6A52yPQMQg2wuM4+KkXc7Pf8T/POQk3M3b69/eeKDBWu8zjGN/PIlX2/dicVk7d27lAfGG2sd1a6mKfsWu7YxVC0dyZM7yuXDzzCqEVI0RT7QI6CmtwpeC5+KPrifTdjnzWxqBVy+lrjsuXj/Syj+KoG5eUQSAFAWrOYN0mGG2Ecidgr5m49ePL/H86liTcNu7/WjqC6ZX2wUFV0zdje/N244ae0i/p/OU/jtCnypO6Ief+k8uMPKqvOQPDXWv6cAydTu+jRfTFx58L8TyVmSffLrz0vWbjxYyUZ4qzTQAPgaAvOtzaFizbEpzCJWjUUXTvcLitcx1lU85CSRNhSGUVNDsDw1ZGVFF3LVnLuY9cTm+++ZHuavKthVvqPpZbKrYlalltGMciGkaNvcHR/hEiVrrxRPxPeFcaNV94Oa0QfSa22j62eMawUmGunnFaermFY8A6DRjiisAnJCDaDBSjbEEAOXbvKNuXnEyRiFce0xREUwk8fzBHijZVErKwtJ4/GrXcVjw1MWIJAXrg1N/iYXW5tTGfyYagzmUD6806JaZVZBN2+3v3Fz0kpgUNIjFxql0HTMP4/ATDnXziip184qHAWwx0yDHI5pmURWAunnFifnG8uCeQASP7e1g89toeDfgxaJnPoXnO6v43025U59uYaKZyoa3048GrxNn+twsIjAebOoLIJnx8HCc8fuPztPQZK+G2p/wHjp10Zudiz7+evO8BVc1z1vgHNeJJgDq5hXEMW8B+PThHp2iIon+xN355jjJ5JbBJ2PnW4DTBdRMz7mbTVDwxiceRF/M4/c32Wd8q3LFDwB8gwxstyhgZzjKwjyHA0qTeGXWf7EjNO7/FouwX/3Ew9Fv7txqC/gj6O0IwGKV4mXTfSGIfKeeUHdrCbUFmrZX1/SDuo5OjkNfMqnGzMvwcBxXy3GYErHaZiiCUMfpelVHIKno8aS7y+drv/UrNzzY7/H2A+gxp4DdTQ31oypD6uYVV9LzRfXx5ETgJJ7FF8cLCixHO2NabnZd2ZjEmo1vpbOaoxFgTzNAIZ6qWkDIrkhGVRGPvDIVX1H+TRUh7y6MNq/eZqtjXhc3BMywySyCrmaXvAxn+9x4sT+IuMlhZxe70ZFIYkfISPucaelg30ldwN5EGft9zN59NtI+FdOfWlFTJMtTfTKmFPnIg8eSOCkLW1ENTwL7aMbEmcoy4zl4yTcbV4ADvXDHIujq8qNowD///Oc2nf3nxksyLzM+b8sOUho20JTQ1FA/VAkwiEY+wHVKWOHJ40P5o/bywUwCUrZY6ZlQuBSilHw1pvKjTTtPDp7EHGlFAYIDeXdaFG/TArrlAbq563v/ykIFAcUYUEo2qrBIefevs8tMs0zh0ooinOp1pP+fYNvHvlsSlVB0AZyu47iOVrYsmVBZ+rtsk4BAbPCgJKIlAaD0CYcMuKyAxw54bMZv+tBy2s9rA6qLYJEHn+uT3n5r+GXKZjbcHQD21fz1tV+V3/9y+mlWN684jrTAeH+Cp2i+5LGw6IYaVVnhJ1Xu+ncOsBR7WlYoiONQQFjn4fQvuwPwmt4R2Zp7D5KvurTNzSXOBIfy2fGDfycNyp8cvLgpVkve/X/b2s3ifil8uWk/1rb1pP+fbDfSAbdGZmGq1QJffz/cnLG9klBgsZoDHooBfSM9MgWBwkaaDqGIh6PBAkckb72Jz+aSvq4q+v6qh7eWqJtX0FO2Id6fcETboywTnGoBWZn1fqOQJVVOTdnhw8vNckHXdShhlcqvw/kJt7Jxu5lbaWDBqcDCBsCWS3NleHaP5jmdd+EHjtN4wX0eT1rKi/3K4HRQapGGcNRYIHNJnGx/j+3h5+rxxImzcb7MMy4jJJMqBCHj2Hu6gUB07CcaiDDu5SwA7+KQzDE1pEBi2uqUquPhZFNQs/wyGVLmENEokh9nNRgRVjpGxHJNN/JoKNF3LFCCCiMeJ3LvFrLnN4jz2S+rDSirzLftqwA+85UvrYk5F/F3CW5m/Z9LxKf5KuVIJoleY80vLnPh446dsHIJlsP5UN9U/HxvB/rfaWIJR8Qh0lQeWoZbjM1luzqB9oFBcT8aiNDdQcQjCSidGoJPxhG2531YcVaxCxfOLkUyrpZe3XvWNTSnUd0DZWZT/NA90wWrT2a+VUqvD+0LIdASxMCuAPum7an5QT6kGyAAD45OuJWNr5G0Ml0w+XAXk/krG9kEyJc+RSzWnCIcLQtmiL9aq2VcvTo+7aFnA3g+NB9+hce69l7I3T1scIgw3kts4NzDBoAI1toH7DgE9IQANcetEJE7BoDmTqY4RMNxCMU8nItlhO2O7PuYeCsUxdvhGOweC57r8+F1aw2SAYXVXVi8kpEfujuIWGfMqMa1CiyaTxxpLZUZN+YbEPIOsZwbQ0G5qzBeXdlIVvvpAJ5jNY2D6DIt+oVY2fglrGwcLpOIYBf9Ycof3qUZJ5AxYHZBQImUW6ktkgS8cvJclpOZQq3Ug0WOXezfo4GF6eVyIsECq0Surl+EEGvPoaVTWiGJzu0HgLfbgJ3twK4O47PjIPDGfuBAHyNggrLZSFQKACcDA+7BIszzSjwjDt2dUFhCFCX40oV8nzuTEYzqCklkUomatdTKckSpmIYIx1sFlgBM8x198mmX1JkCRj19m++6DT2FW+8rG19k1alrNtJIkqqvYGVjYJS9nqfy49Psuyjs8lJAUc/JXDnNJqM7S/YXzDSJZTv2spBPCtf4nmHVP2S3URJuCnI8zgaLblss5yHVctAiGnghx3NJHBhNDnsGhyLQHwVn4aCFdASfjqP9osEg8TO9uW/b6jCmgF1RBw5GJZRySXY6Kt6kTzYQt9Gcx7guC0hEpvflsAbjalCzslHDysa+AohGeJoRGPgKKSh+ZajaS4lIxFF3zp+WdeeWDEO93tqKC92vsd+/61syZDtFkqBpGuM63sqBd/EIB8dv5JMCEOgLw3etHeU/NCLze2oHmyiN8KFmgK5BlAVGrLXyyaPOWzBVfNI2qQaexGgm4v0JZj7AyLVRtIR2O8bpLysYfOlTfVr3uWQLXvBV31Mbftt7LshxLZkaJXHIdKuML72zL+8hJU7Fj8ofZCnub0Sn4+ngcUPWh212aKrO5jn1IFX9xKG5OLi8hWWbDUd/dwiqqqH/T1EmJnWOw7szZhW8vyQLUOIqXuRr8L3UQg4d0PEyPQOkEJsKXylrq8Xh49BRwpr2BJIsss9LHGteR7WC6UNI3KPFX3yA2TeT0X6JPOAXXON7ZuntvedG+xTVVp7R66vGasGuSIyl6uXCt0r/irnyQeYp+UnXZ1haeyYCTieSicHac9fFAgJ/jyEWScBqz28zDgfNa/1dQca56oAxaM0zZiLgchV8DNJwCW0KU2io0vdO37UbdubavveOS+mGTgOHb0PH0lRXimHQtMRgAvDhOOwLxUYA7/HQzrvI/VrzoWEOa4nnmBGdC5/xvIorvYYp+f+6L2T1eMOxf0oNEjHjZm0OGUqHxqavzrZ+ZiIUCuLa9v29bJ/a+4rgOtvwKb5wyqljumHerHMIKYLuu27Djb7rchON4LtuA223xXfthk8xLZzDCPcZL/J3+67bcCD9f3y0KBymWfAd2mFV2SMzoXZDHcZdM+xy1qgB5bPcXP4g+/14YAHu8y/Ket69NTUIRA3COT1WhJ6PQ4vpjJjt+3oZQUYD+TgPHuiG6jbm4fbvBRDekkDEZsM/T81+3hTo2rNdv6bpXNl9L9eOZbx81214GjoWgUNaIeB4bkBThqbbTwbHEfHIdfaonY87b6u6G72Job5O8qLUDuO6y7wv4WeV97F57aXIHFZEMlxEppCQLNhaNw/RUJyJRptTZmp86Y1OREJxHGjpRGggmtX+VhUVvZ0B7N/VCdtSCdPuL4bg5RHfpUCL6njokxcy4uXDTdPK8Z1pFVm3EGWhZqzj5btuw5u8yN+W+q9r+hW+6zYMUQYns8XgFwEcO09um3lT0W14LLoS/XppeiU5lltjCbj5IL5X9ihL+yNQBtmNh5ax+S0fnvr4GVh8z29R7ZRRVu1Fa0sXwi8YmqU4n0dncz+4Nj9kuwRRFJg4TMYVSKfySFCmGJUyPxuHFtTSc9t7tdPw+Nnnjnpjt7d2D12Q6bhRtPyWew5oSW01OCzlwG0svvaBfwzf6rB6Mo/5YrrPndWvOt8qEkK2hC5hW+J07Ewcj4juQBHfiwru31hk28qSbAn39J+O27rPh1agYPjZz1fjLLUPDpeVcd+h/YaYnP5YMTPMSfQ5z5BhmSqg7x7DaTzjCR8C/4ihZ81QZ3TA6cJN3/8hOkrLxnyf/YfCCPUZkQlnsbWx/ZJTHh3zQUbBpBKOcPHrT/7wptK//vgk23s5t9mXKMN/dzXi5Uj+auErK4vxSJefNRIgVHV24Ne3/hh1U1xMuyRNs6vNjwjZg6ZW7bvWAes8EQdvMMS16OOhBnToyUE26fd48KNv3IT91VPGdY89+4OIBo2Hz1lsPa39klNeHteB8mDSCVf28AuXlVYU3X+mcweuLNqK+dYDsCCBiO5EqzIDjwaOx4a+Y1jN3Wig0uT90USmZMJx7zbh5jt+g2lVrrQpQGZBT0eAcWEKRFirXYLVIUMUeUZgst3eOmYefv2Fa9Dn9Y77Hjta/ORsZr/tHrm68/KP5u4nMk5MOuGwZuOPZtdPvzkVhqHa8ln2wfgedWLYEz281IYp7Yfwzbt+jwWRHhSXuZjrKxyM4dDeXriL7Sit9KTdYeQliYUTeEWx497zl+KVExYwg3u8oOO1NfUZLjjD780Hr1lcuE1SIN6P/seLQoEwikxH7bvhGIuKkyGu6Tq6EqMnJo2Gtsoq3PhfP8Ip/96Oc7a8gAX7doMLGXNYOBBjLfbJRdbh8ODlunl4/rxTsXNW3WERLAVSdFIiQJCEWP/nFx1xomHSOW7NRpJdfpfHYauZWTVkFSUSEeFCuUIuhwFKbSjv6YY3MABRUVlsrdvnQ2iUUM144O+IINhj+BZlu9jWs6xhzOZAIZhsjmsg5wa1SKT5JDNSHVAKz7sYK4iTSDscj4Y4VkQDgzXygsS/NlHnmRQDPAPnIeV97w8Wus9RAxKTSmLwAeRF/o8Tde2TRzhDTF6Z+iuNkuk1EaB6v4+48qcgDIdD4FlyUyE5MpGBQaVKtPDx9otP+etE3ctkchzlyLOJTZJEON3GAI43s3k8+FiRE/ceOx3FeSLvmXAKAquUPcFlx5nFLhaVz4dIhpiUrOK/Rj3BYWByCLdmI+X13ZL6W1TqYU8yDcoZxYWHSw4Xm/tDOG97S9aeK9lQIYvpB4u+j3Xm9lmSiFQzgqCCxP9iIu9lsjiOut2xpExBFFBS6sVCt4Npkv0FDuKRAEUlsjXYyQVxmDSgRj32HOkQydjg3CZahGj7xac8PZH3MvGEW7Px2FTbe4KvvAjTnFZqxcH+HyygoOT9gsyPFOO5EpwyQ0eSLLwz0Zc8GRxHsThGJVES4Sv1pgOnOnT0JPJzXKaWNtnIZjm7xezzHJcxkrzATZgZkMLE2nFrNpLhdGnqr6/MiwqrBalOfEFFy5uyQCCfX8+BIGSHBJvLAtkhGjmUk4BwFmdALsJRb5YUOJ5rnuirm2gDnELxht7PAV6fG3WOwRKjgQKMbiKWZBHQ2xZCqDfGsqhokKght8UusvgaP4Zql0LAKmg4Dr0kDYY5V7yiwIo0hwfVKQWdrikeYWniIxMvjzAmmnDpQj67w4ZiqwXejE58fqUwxYTS3cpnepYMdEbcalL7cjKunhroibpTsowGzULJpTaRZVjR9qLED3lZRS6w6quEimRMYYNORjSlPHgrHIDPipCiwpnBZaRdlkoSK/saDl+NC937AjTfTXhzuImTOWs21pipaIxSpZXFWDSrGnUZkYDn+4ND0tLz4LdNDfVfzVxd89i2mUpCu05VtDOUhFanxBXncKlL2VaUuEORgOFcScoEqe+sni6LtKbtK2d7Ueu0MjsuE9Qa64X+0IjcGZjcGuiOHgSHaQcbT54wlTn9+LesrjvJrP6nR2nr7FXNbx/msX+SeXy70wZPxpNLLRQLJNrLZuHJELQuXUiR2PQ7CKb+7fXiZFy9QlO0s1RFO1ZNatVKUrOpMS1ds1IoBIkIDvR1BdgbJWtkCSUZnh4yzE9y27FtIDyioIK43FNupxZVazxbdlzf1FA/IdoV17K6TjC7nV81bB29r/T62auaX8+xb26s2Ug+yfSrVGi+mHv8TCz2uZBqWrorHGMtfkfBDqpZaGqoz/1GilFQ9fDWhbqmN+iaPkfX9QpdQwn1wKGscOi6yphPU8oTSmKGqihIJBNQ1cGxnj6nBh6nDad6nSMUk55EElvJYZ5bwfongKubGupbx3v9uUCEo6f2f3Kspzv48uxVzYW/GmXNxrkm0dMTNL3NkcI41LukzCIhqWt4tjdLO4yhoGyhc5sa6rvzbXREsGbjKeY1jwAFfKfPrYVdEnGSxwHfMDuuN5Fk7azyBKOon3FjU0N91pdwjBe86UPMBXrE7mpZXXd9Qcdfs5HytJ/JJBrBawZNm8IxHIonsJWKBvMTjdLWF08K0cDqIah266lsqyhv5UDLQUQSCl72h7B7mJTwWSRU5a+wJY/R3+Zt2fGRI3nJRLhC+vevaVldd13+LZiHhKpzhrQgtNplxnEw6+NeD0RG8xX+jlLWmxrqJzvuQ8pP1kKWWDSOve8eQCgYwc5wDK8OhIZ0+/OMUq1KQoeaxc/bsmN8xQxZQKIyYr4ssxB8ffaq5t+M2G7NxgsA3GdeYBo0t02fWwOrreD2ELc0NdTffKRubsxYs/FM4o584+H2OpmG7LBbWVt+ct1RWn2BPteC7q9ldV2tqSjSQbfNXtU8okMTEe5l80VIcJb44CothSDRay41xEMRDHR0IBkbIh5+Stnks1c161izUTDbDX432wVUT6uAp3Dv/21NDfXvf1fzNRsp35zy3rOnJpugV4xSaIq+SWPmC6tpp5yGWU0N9VmzvlpW11Et16/Nt2Wm7BfS8n9FY8zG3ASd7XH66a2qRHFtDUSLxXztswB7sReVx8xhyzPwfQBr5/36dkpD/kcuopVV+cZCtO2p+oL3HSsbKY5WTxU2+eyIaDiG7vY+HNh9CLve3IO2vR3pHit5YMsMbw0jGmni/za9TYxoVqcDnooKyVVScpNks96UuT1xXBUvCAeqj50vJEMRqBkeAVakZ7VCtFmRCIfR2bKbpR0Q3hCmhlc4PucY4EZGlEsqilBWVTIWElzc1FD/cAHbTeR2VQMAAAq5SURBVC4MZesGUumNV/fmh8VqwYy5teDze2yIuic0NdQzO7lldR1t/D3T7mVsa3W54JtaA8GSofToOtHmHnvjo6wbLjtD59qPvWF3uz+ixrPHqnhRgMXthBJPoKO5Bbpp5xzgfbjGcTV284NltuMgGomP4qaG+lGNuvcNazaSu+cC89Vsed8uQm9qptDVKHi2qaH+7JbVdcUmZzemNvdUlMNTVQlNoQ5CcfZNVCIiilYZSjx+vePTj93OKCzb7f/MRTSwwgUVcX8QgkVC5dw5EEwjulbrxSOhNbg4sY39p8j2GIlGeO4DTTQw8RnDysaHsLLxfFaAmOV9sikMFJYEdda1j9xB89bbmUQrmTaVES0ZjiLuD0BhhFOgJRUkwxHEA0FwPE8SwIzHqdq9uc5AopGSR0lZSfiDzO9XOW8uLGaTGpuexM+iD+Gb8jZU1owr/W1EJcoHGisbSZmjlvkd2S4zFomTK2bUO3jdd+LXu6ylLAeHE3hU1NXBXuRFfCAEJZr9OSYCakljIk2pQm+adcmD0HUE+3rR09aK3rZW+Ds7oaoKOzApL+VzZsHuNQzrTms5/jXnovEO99/Hu+P7hpWN+02xmRWxUVLoiRGa9vrx2aKvQXY4UD3vGEh2K2L+IBEm775qLMH6hTDCeZdvUsymoGlEggHEQqF0N55kPIZQbx/7nwhQO90kSmZMh2fKFHyl4gb0KmOrtTbxdlNDff7K/Q8qVjY+aTocRiAezTPtqBpa32tHOBiBP86hvG4WUzVoKlLicUSDQUQCAYQH/OxDvzMrMnVdpx6gQ+Jx/2t6D4x3g2eJlcWjEaOXFMcxmUtKilZShZ37eKgDB1A1tRzuojFlba0/GmmWgd+bjXuGIBbLznHRaAyt7x1i8T96y+Vfyl9EkhoXRGNsKhro6sw67rLdntIrwmZv5sGcE+/yTS0A/pT6L4pZElY5bkjaAE2e9kAv/te3jVV0ki2zd3dr+u37oyBidiU6mvGE6d1Iw6eHcMHA0JRKKldu29+OvTtbGdG8fAIPlz6PRfHm9HwW6u/PTjRbmmiEW73LN/UiS7IQdXNlapHsdJAGM2SlPUvLCNJ6Pqtsxx3FL0HiNEQDMTTv2IvW/Yeg5I9w/+ZwwjUfCBhNel6lOvXTlN34VeQ+vBj4Kb7fez8kLYlEPIlDrZ1sPAK9RiOFc+zteMW3EYvj7xqqPkmySASx8IhGC8aYe9L+etJD0rmaIyxF/7olFC34A0xxSTKXZKzFZmOffHhTqML1odPxdsKbPrrdZUOxzwvZZmEhEnINVUbbcdtr337FrkSocduDs1c15+9c+gFFy+q6Y5+Qjvv98WrrqdVa/5CL/FTNLXgnMOijPV7uxw9cb2CJ2szEYgr0u/fQwSHLUpDtDrhLmHlF47PQlIrZCWcS735qfDCe4VJ5ERu4evw8eBz2JYf2s6Zk2OPnluPnb67CtFDaFEqYraPIJPn77FXNH9hqENPLcZJpjH/adI2NAEmqOyouw7t6KaZJYVwk78NH1b3Qs0T8iWB97YegqSPXFVdWQZAkUjM/4V2+6bnMdbkI5zDfvn/ieG9Sk2Q8w83C/dEZeC5SDr9mgSxyuD9xF+qDu3Ltppjt3Z80O/Vtn72q+X19e0fL6rpppgJCn0+Yb+LICkmWmQFt87gZ8ch9SHOYVsCcTwQkCUffmk4laCL5jUnLudS7fNOI4pGcTjX/uiWlZr7HqP38U5pmNpC3hXydEcEKidx04SCC3T2I+P2jHRamO+w180NpDETx5tmrmo94gNXkJqrWn2++wIEeWno5Q/4GMxwHV4kPTp8Pkt2YSsgLxQh2eDV/NH9e6F2+KWvkPK831L9uyRTz6c/50iGaWAM93ewJEwQBvCiyp4UcpaI0qJmSv1OwyhDpJfAcx0RDPBhCqKcX0UAhjfiGnpbyhQBQeKTbTA/oM2+WtNWQyb0x85OCx7xnh1k5VGKGb6aZAeX8zaYzQM4HIpbscrJ7J04hLVuNJUbMV4lYFGpSYfcuWQqKTVLrpwu8yzflTNgaNT3Pv24J3dyjZjXpCCSiUQx0j3xvjyBJKK6oNCrYh5yRY1woyBb2DWaUGkQM9/sNTiy0Be8kgiSKo6gY9iKPoXFT1Nvw2DMOU7PVrus6/N1dQ+KZDo83U1PMBuKwS7zLN2V9GVJ6GAu5df+6JfQk/jaXm6f3YFvWydXhLYLdnTsaQoPBmwRMEZHcacloFPFQmBExHh5nF/PDBF2bzeOBze2GxWGHZJXNNgqAmswgVp6HLNdD7aueAj57ugM5nr/jXb5p1EqYMSXE+tct+YLpYRmSmM1cMwMjNXoSIcVV1YVFh1OcaJHAS1I6C5kIqSYSzB1EA5GMxpjoSZJ34ghwJjl4LVYbJJs1bfIwaZAh5nVVY8TSiLtI0SjwvKlpZDjcpaXMsM4A9eb/nHf5poL9tmPOZPavWzLL9Hh8LLWMnKZ9B9vSQdZMEMcR52UF9dFXFDY3Djf2SRRRCgUvieBEIesTqrOohQ5dU41vXTfml2wDyxteH47j2bmMDzfivLQvKRXGxwipZLOxCgFJIZJGw1FUWZU5/5PGeJ13+aYxNbEZVwq6f90SzkzrW212OUU0GGDGeuZAcODYfGBzjvS40NMY6utlREcBYpW9ScUkMHFJavCZG45xJzdYK5BNw00RkxHXIDJMQhNHkfOXPQB5QjJ0zbSfxWrNJepGgCQRSaTUdTncntQcR1x2g3f5pr8UdKCRwzF++Nct8Zhh96+NRSOjm6dQ0XAO9VZUFKp1TSqIuBTiime87YNsNhJ3FJYZjYiqkkxrlTwvqOZrXX7oXb6pP++OeXBEij7865ZMM5OGSHkZNb6TS4QUoHENgZJMsgiFZC34mRkzkvE4Ar09TGxmA82PnrKCA8hPmMrHjsO9riNareNft4T67n4TwLWU7ZdvWwrQDp87RhWXpv80HgkzbVMxg46kULiKfaM++cThJLYSjHM42Fwu9smFRCzGQi25QKLaU1rGuG8U0CtAv+9dvumlUQexQExImZV/3RIajSvM2u+sbjMWLPQPSgoy3IvKK/IOfthPgcXs/mgaRCKenOdVKiTuWHA4A25fCRN32UDcRoTLpnQxopWVjSba/2aGYrbk22g8mPCaXP+6JSeYRLycytoy1zH1Ph6DIEps8EYrEaaYFSlB+eAsLs6qDBHImasOSw0gMesty+l+ZMoTnTMWDKYVKZ4RrZzloGa7TLPz++3e5Zua8l7sYWDSusOYmugpZsLnBfncaPkQ6utDNJQ9gEABR5evJKfoIu5JDM3KZoNfVJH3RU8MxHX0oNGHjPJMd54JSnWjFlD3epdvGrMPb6yY/H6VJkyFZgl77Yvhec/92A8D+TZDmWJWEOHweGB15n8tKs2LpGhkwuktYoQYJ/aY6errJpK7suF9I9xw+NctmWPWMHzU9MrX59NQyf8XDgywOc3mcGa33bKAbE0iINl8ssMJa475LQ/eNLXDh73LN4296PMI4QNDuOHwr1tCiRZUJPkR83uu6cGnMNPYOqmNH6qZtPqq+RL1Td7lm8b1bvMjjQ8s4fLBv24J+dAo5EQfipfRN9XlkReH0rppPWko9KEgWTbOpVgfRd/JrUEORZKhlORK6YIU92OxP+/yTe+PlzsfAPx/laSu5ut+HigAAAAASUVORK5CYII="
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/about">
                            <a>Belong.</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish">
                          Every child feels safe, valued, and connected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Parents Feedback</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  What Parents Say About Our{" "}
                  <span className="clr-pri-3">Brighter Launchpad</span> Kindergarten
                </h2>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <div className="themesflat-carousel clearfix">
                  <TestimonialSlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-register">
        <img
          src="assets/images/background/bg-register.png"
          alt="Image"
          className="feature-register"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-5">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Online Registations</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Admission Going On ! Hurry Up To Admit Your Seat
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div
                className="fl-register wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <form
                  action="contact/contact-process.php"
                  method="post"
                  id="commentform"
                  className="comment-form"
                >
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name.........."
                    />
                  </div>
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      placeholder="Progam.........."
                      id="progam"
                      name="progam"
                    />
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={21}
                      height={17}
                      viewBox="0 0 21 17"
                    >
                      <g data-name={2}>
                        <image
                          width={21}
                          height={17}
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="row-form st-1">
                    <input
                      type="text"
                      placeholder="Time/Shift.........."
                      id="time-ship"
                      name="time-ship"
                    />
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={21}
                      height={17}
                      viewBox="0 0 21 17"
                    >
                      <g data-name={2}>
                        <image
                          width={21}
                          height={17}
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="row-form">
                    <button className="fl-btn st-14">
                      <span className="inner">Enroll Courses</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-blog2">
        <img
          className="feature-blog-1"
          src="assets/images/patternphoto/feauture-blog-1.png"
          alt="Image"
        />
        <img
          className="feature-blog-2"
          src="assets/images/patternphoto/feauture-blog-2.png"
          alt="Image"
        />
        <img
          className="feature-blog-3"
          src="assets/images/patternphoto/feauture-blog-3.png"
          alt="Image"
        />
        <img
          className="feature-blog-4"
          src="assets/images/patternphoto/feauture-blog-4.png"
          alt="Image"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading st-1">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">From Our Blog</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Tips And Insights For Growing Families
                  </h2>
                </div>
                <div className="heading-btn st-1">
                  <Link href="/blog">
                    <a className="fl-btn st-3">
                      <span className="inner">View More Blogs</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {blogPosts.map((post) => (
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-12"
                key={post.slug}
              >
                <div
                  className="sc-artice wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <div className="box-feature fx">
                    <Link href={`/${post.slug}`}>
                      <a>
                        <img src={post.image} alt={post.title} />
                      </a>
                    </Link>
                  </div>
                  <div className="box-content">
                    <div className="meta-post">
                      <ul className="fx">
                        <li>
                          <Link href={`/${post.slug}`}>
                            <a className="fx clr-pri-5">
                              <i className="far fa-calendar-alt clr-pri-5" />
                              {post.date}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title-article-post">
                      <Link href={`/${post.slug}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h4>
                    <p className="wrap f-mulish">{post.excerpt}</p>
                    <div className="btn-rm">
                      <Link href={`/${post.slug}`}>
                        <a className="fl-btn st-13">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer2 />
    </Layout>
  );
};
export default Index;
