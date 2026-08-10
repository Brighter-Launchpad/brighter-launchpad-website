import Link from "next/link";
import BeehiivSubscribeForm from "../components/BeehiivSubscribeForm";
import SocialLinks from "../components/SocialLinks";
import { locations, sharedContact } from "../data/locations";

const Footer = () => {
  return (
    <footer id="footer">
      <section className="tf-subcribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="subcribe-wp">
                <h2 className="title">Subscribe To Our Newsletter</h2>
                <p className="sub f-mulish">
                  Stay up to date with news and stories from every Brighter
                  Launchpad centre.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="subcribe-form fx" id="subscribe-form">
                <BeehiivSubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner">
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
                  <SocialLinks className="footer-social-links" />
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
                      <Link href="/blog">
                        <a className="wd-ctm f-mulish">Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Our Locations</h4>
                  <ul className="list-link">
                    {locations.map((location) => (
                      <li className="fx" key={location.id}>
                        <Link href={location.detailUrl}>
                          <a className="wd-ctm f-mulish">{location.navName}</a>
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
export default Footer;
