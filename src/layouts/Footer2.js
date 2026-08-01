import Link from "next/link";
import { locations, sharedContact } from "../data/locations";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5">
                    Subscribe To Our Newsletter
                  </h2>
                  <p className="sub f-mulish clr-pri-2">
                    Stay up to date with news and stories from every Brighter
                    Launchpad centre.
                  </p>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <label htmlFor="subscribe-email" className="visually-hidden">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="Email Address"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Submit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a
                        style={{
                          display: "inline-block",
                          background: "#fff",
                          borderRadius: "8px",
                          padding: "10px 16px",
                        }}
                      >
                        <img
                          src="assets/images/logo/logofootert.png"
                          alt="Brighter Launchpad"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                    Brighter Launchpad is a warm, inclusive playschool where
                    children thrive through exploration, creativity, and
                    joyful play. With a focus on nurturing confidence and
                    curiosity, we provide a welcoming space where little
                    learners feel safe, supported, and excited to grow.
                  </p>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Useful Links</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/">
                        <a className="wd-ctm f-mulish">Home</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/about">
                        <a className="wd-ctm f-mulish">About Us</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/gallery">
                        <a className="wd-ctm f-mulish">Gallery</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/location">
                        <a className="wd-ctm f-mulish">Location</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/careers">
                        <a className="wd-ctm f-mulish">Careers</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/blog-grid">
                        <a className="wd-ctm f-mulish">News</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/blog-grid">
                        <a className="wd-ctm f-mulish">Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Our Branches</h4>
                  <ul className="list-link">
                    {locations.map((location) => (
                      <li className="fx" key={location.id}>
                        <Link href={location.detailUrl}>
                          <a className="wd-ctm f-mulish">{location.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget-contact">
                  <h4 className="title-widget">Contact Us</h4>
                  <ul className="list-contact">
                    <li className="fx">
                      <a href={`tel:${sharedContact.phoneTel}`}>
                        <i className="fal fa-phone" /> {sharedContact.phone}
                      </a>
                    </li>
                    <li className="fx">
                      <a href={`mailto:${sharedContact.email}`}>
                        <i className="far fa-envelope" /> {sharedContact.email}
                      </a>
                    </li>
                  </ul>
                  <ul className="list-link footer-legal-links">
                    <li className="fx">
                      <Link href="/privacy-policy">
                        <a className="wd-ctm f-mulish">Privacy Policy</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/terms-of-use">
                        <a className="wd-ctm f-mulish">Terms of Use</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/privacy-policy#cookies">
                        <a className="wd-ctm f-mulish">Cookie Information</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/anti-bias-statement">
                        <a className="wd-ctm f-mulish">Anti-Bias Statement</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright &copy; {new Date().getFullYear()} Brighter
                  Launchpad. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
