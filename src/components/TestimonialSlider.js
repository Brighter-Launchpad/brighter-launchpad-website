import { Swiper, SwiperSlide } from "swiper/react";
import { twoSlider } from "../SliderProps";

const testimonials = [
  {
    name: "Lucy H.",
    quote:
      "What I love most about Brighter Launchpad is how they make learning so fun and engaging. My daughter, Sophie, is constantly excited about the activities they do, and I see her growing more independent and curious every day. The staff is incredible, and I trust them completely.",
  },
  {
    name: "Darren and Rachel W.",
    quote:
      "Our son, Noah, started at Brighter Launchpad a few months ago, and it’s been such a positive experience. He looks forward to every day there. The environment is safe, nurturing, and full of creative learning. It’s so refreshing to see how much he’s learning through play.",
  },
  {
    name: "David G.",
    quote:
      "Brighter Launchpad was the best decision we made for our child. The teachers are always attentive and engaged with the kids. Our daughter, Zoe, has learned so much through play and group activities, and she’s excited to go every morning!",
  },
  {
    name: "Katherine L.",
    quote:
      "Brighter Launchpad is more than just daycare; it’s a place where our child thrives. They really focus on social skills, emotional growth, and the joy of learning. My son, Ben, comes home with stories about his friends, teachers, and new things he learned, and that’s all I could ask for.",
  },
  {
    name: "Mark and Rachel P.",
    quote:
      "We were looking for a place where our daughter, Lily, could learn and have fun, and Brighter Launchpad has been perfect. The staff is amazing—they truly care about each child, and it’s evident in the way they foster an inclusive, joyful environment.",
  },
  {
    name: "Olivia and James F.",
    quote:
      "What sets Brighter Launchpad apart is their approach to nurturing each child’s individual growth. The staff takes the time to make sure our son, Jake, is supported and encouraged at every stage. He’s more confident and communicative, and we’ve seen him develop a love for learning.",
  },
  {
    name: "Samantha and Liam S.",
    quote:
      "We’ve had a wonderful experience at Brighter Launchpad. The staff is attentive, compassionate, and professional. Our daughter, Ava, has thrived in this caring environment, and we’re so grateful for how the center has nurtured her curiosity and independence.",
  },
  {
    name: "Anna P.",
    quote:
      "Since enrolling my son at Brighter Launchpad, I’ve seen such a huge difference in him. He’s more confident, eager to learn, and loves interacting with the other kids. It’s truly a wonderful place for children to grow, and I feel so secure knowing he’s in such a caring environment.",
  },
  {
    name: "Michael and Sarah T.",
    quote:
      "Our daughter, Mia, has blossomed at Brighter Launchpad. The teachers are warm, approachable, and really take the time to understand each child’s unique needs. We can see how much joy and curiosity Mia gets from her time there, and we couldn’t be happier with our choice.",
  },
  {
    name: "John and Emma R.",
    quote:
      "We were nervous about finding the right place for our toddler, but Brighter Launchpad exceeded all our expectations. The staff is professional, loving, and genuinely invested in our child’s growth. We appreciate how they incorporate fun and learning every day.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper {...twoSlider} className="owl-carousel owl-theme none">
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
          <div
            data-dot=""
            className="item-fb wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="coustom-padding">
              <div className="heading fx">
                <ul>
                  <li>
                    <h4 className="name-author clr-pri-2">{item.name}</h4>
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
      <div className="owl-dots" />
    </Swiper>
  );
};
export default TestimonialSlider;
