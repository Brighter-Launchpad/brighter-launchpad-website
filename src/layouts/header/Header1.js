import Link from "next/link";
import { useEffect } from "react";
import {
  About,
  BlogLink,
  Contact,
  Faq,
  Franchise,
  Locations,
  ProgramsLink,
} from "./Menus";

const Header1 = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed main";
  }, []);
  return (
    <header id="site-header" className="header_main d-none d-xl-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="top-bar-2 fx">
              <div id="site-logo" className="clearfix">
                <Link href="/">
                  <a className="logo st-2">
                    <img src="assets/images/logo/logodark-2.png" alt="Brighter Launchpad" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="site-header-inner st-2 fx">
              <div className="btn-menu">
                <span />
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header1;
