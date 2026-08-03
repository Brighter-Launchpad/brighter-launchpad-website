import Link from "next/link";
import { useEffect } from "react";
import { sharedContact } from "../../data/locations";
import {
  About,
  BlogLink,
  Contact,
  Faq,
  Franchise,
  Locations,
  ProgramsLink,
} from "./Menus";

const Header = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed inner-page";
  }, []);

  return (
    <header id="header" className="d-none d-xl-block">
      <div className="top-bar">
        <div className="inner jus-ct top-bar-contact">
          <a href={`tel:${sharedContact.phoneTel}`} className="clr-pri-1">
            <i className="fal fa-phone" aria-hidden="true" /> {sharedContact.phone}
          </a>
          <a href={`mailto:${sharedContact.email}`} className="clr-pri-1">
            <i className="far fa-envelope" aria-hidden="true" /> {sharedContact.email}
          </a>
          <Link href="/location">
            <a className="clr-pri-1 top-bar-locations">Our Locations</a>
          </Link>
        </div>
      </div>
      <div id="site-header" className="">
        <div id="site-logo" className="clearfix">
          <Link href="/">
            <a className="logo st-2">
              <img src="assets/images/logo/logodark.png" alt="Brighter Launchpad" />
            </a>
          </Link>
        </div>
        <div className="nav-wrap">
          <nav id="mainnav" className="mainnav st-2">
            <ul className="menu">
              <li className="menu-item">
                <ProgramsLink />
              </li>
              <li className="menu-item">
                <About />
              </li>
              <li className="menu-item">
                <Franchise />
              </li>
              <li className="menu-item menu-item-has-children">
                <Locations />
              </li>
              <li className="menu-item">
                <Faq />
              </li>
              <li className="menu-item">
                <BlogLink />
              </li>
              <li className="inner">
                <Contact />
              </li>
            </ul>
            {/* /.menu */}
          </nav>
        </div>
      </div>
      <div />
    </header>
  );
};
export default Header;
