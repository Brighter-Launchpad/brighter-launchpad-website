import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { fourSlider } from "../SliderProps";

const GALLERY_ITEMS = [
  {
    image: "assets/images/common/gallery-home-kids-huddle.jpg",
    alt: "Children huddled together laughing outdoors",
    size: "st-1",
  },
  {
    image: "assets/images/common/gallery-home-kids-friends.jpg",
    alt: "Three classmates smiling together",
    size: "",
  },
  {
    image: "assets/images/common/gallery-home-kids-running.jpg",
    alt: "Children running with backpacks outside school",
    size: "st-1",
  },
  {
    image: "assets/images/common/gallery-home-kids-ballpit.jpg",
    alt: "Children playing in a colourful ball pit",
    size: "st-2",
  },
  {
    image: "assets/images/common/gallery-home-kids-hands.jpg",
    alt: "Children reaching their hands up together outdoors",
    size: "",
  },
];

const PhotoGallerySlider = () => {
  return (
    <Swiper {...fourSlider} className="owl-carousel owl-theme none dots-none">
      {GALLERY_ITEMS.map((item) => (
        <SwiperSlide key={item.image}>
          <div
            className={`sc-gallery-2 ${item.size} wow fadeIn animated`.trim()}
            data-wow-delay="0.5ms"
            data-wow-duration="1200ms"
          >
            <img src={item.image} alt={item.alt} />
            <div className="overlay">
              <div className="inner-overlay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                      }}
                    />
                  </defs>
                  <g>
                    <rect className="cls-1" x={49} width={2} height={100} />
                    <rect
                      className="cls-1"
                      x="-0.5"
                      y="49.5"
                      width={100}
                      height={2}
                    />
                  </g>
                </svg>
                <h3>
                  <Link href="/gallery">
                    <a className="clr-pri-1">Gallery</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default PhotoGallerySlider;
