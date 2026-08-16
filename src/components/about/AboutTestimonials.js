import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../../SliderProps";
import { LeftArrow, RightArrow } from "../../Icons";

const TESTIMONIALS = [
  {
    name: "John & Emma R.",
    quote:
      "We were nervous about finding the right place for our toddler, but Brighter Launchpad exceeded all our expectations. The staff is professional, loving, and genuinely invested in our child's growth.",
  },
  {
    name: "Lucy H.",
    quote:
      "What I love most is how they make learning so fun. Sophie is constantly excited about the activities, and I see her growing more independent and curious every day. I trust them completely.",
  },
  {
    name: "Darren & Rachel W.",
    quote:
      "Noah looks forward to every day. The environment is safe, nurturing, and full of creative learning. It's so refreshing to see how much he's learning through play.",
  },
  {
    name: "Katherine L.",
    quote:
      "Brighter Launchpad is more than daycare — it's a place where our child thrives. They focus on social skills, emotional growth, and the joy of learning.",
  },
  {
    name: "Michael and Sarah T.",
    quote:
      "The teachers take the time to understand each child's unique needs. Mia has blossomed here, and we couldn't be happier with our choice.",
  },
];

const AboutTestimonials = () => {
  return (
    <section className="tf-section tf-feedback">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Testimonials</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                What Families Say About Brighter Launchpad
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                Don&apos;t take our word for it — here&apos;s what parents
                tell us.
              </p>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              {...themesflatcarousel}
              loop={false}
              rewind
              keyboard={{ enabled: true }}
              className="owl-carousel owl-theme none"
            >
              {TESTIMONIALS.map((item) => (
                <SwiperSlide key={item.name}>
                  <div
                    data-dot=""
                    className="item-fb wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1300ms"
                  >
                    <div className="coustom-padding">
                      <div
                        className="testimonial-stars"
                        role="img"
                        aria-label="5 out of 5 stars"
                      >
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </div>
                      <div className="heading fx">
                        <ul>
                          <li>
                            <h4 className="name-author clr-pri-2">
                              {item.name}
                            </h4>
                          </li>
                        </ul>
                      </div>
                      <div className="wrap">
                        <p className="clr-pri-2">“{item.quote}”</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-nav">
                <div className="owl-prev"> </div>
                <div className="owl-next"> </div>
              </div>
              <div className="owl-dots" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
