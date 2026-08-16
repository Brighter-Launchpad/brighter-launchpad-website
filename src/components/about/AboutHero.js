import Link from "next/link";
import ApplyChildModal from "../ApplyChildModal";
import FranchiseInquiryModal from "../FranchiseInquiryModal";

const scrollToStory = (e) => {
  e.preventDefault();
  document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
};

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="overlay" />
      <img
        src="assets/images/background/img1innerpage.png"
        className="bg-inner1"
        alt=""
      />
      <img
        src="assets/images/background/img2innerpage.png"
        className="bg-inner2"
        alt=""
      />
      <img
        src="assets/images/background/img3innerpage.png"
        className="bg-inner3"
        alt=""
      />
      <div className="container">
        <div className="about-hero-content">
          <span className="eyebrow">About Brighter Launchpad</span>
          <h1>Brighter Minds, Brighter Futures</h1>
          <div className="breadcrumbs">
            <ul className="jus-ct">
              <li>
                <Link href="/">
                  <a className="f-rubik">Home</a>
                </Link>
              </li>
              <li>
                <p className="breadcrumbs-inner f-rubik">About</p>
              </li>
            </ul>
          </div>
          <p className="hero-sub">
            We&apos;re dedicated to empowering young minds, sparking
            creativity, and fostering a love for learning. Every child is
            unique — so we build a safe, inclusive, and nurturing space where
            they can explore, grow, and thrive.
          </p>
          <div className="hero-ctas">
            <ApplyChildModal className="fl-btn st-12">
              <span className="inner">Apply Your Child</span>
            </ApplyChildModal>
            <FranchiseInquiryModal className="fl-btn st-1">
              <span className="inner">Own a Franchise</span>
            </FranchiseInquiryModal>
          </div>
          <a href="#our-story" className="scroll-cue" onClick={scrollToStory}>
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll to Discover
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
