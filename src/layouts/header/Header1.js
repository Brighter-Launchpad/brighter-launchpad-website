import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
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
  const [sidebarToggle, setSidebarToggle] = useState(false);
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
              <div className="header-contact fx">
                <a
                  href="#"
                  className="menu-bar-right header-menu"
                  onClick={() => setSidebarToggle(true)}
                >
                  <svg
                    data-name="Hero Area"
                    xmlns="http://www.w3.org/2000/svg"
                    width={58}
                    height={58}
                    viewBox="0 0 58 58"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                                .cls-1 {\n                                                fill: #b250fe;\n                                                }\n                                        \n                                                .cls-1, .cls-2 {\n                                                fill-rule: evenodd;\n                                                }\n                                        \n                                                .cls-2 {\n                                                fill: #fff;\n                                                }\n                                            ",
                        }}
                      />
                    </defs>
                    <g data-name="Menu Area">
                      <g id="Menu_bar" data-name="Menu bar">
                        <path
                          id="Bg"
                          className="cls-1"
                          d="M7.853,2.283c14.9-3.89,29.969-1.4,43.467.819a7.923,7.923,0,0,1,5.735,5.422c3.111,14.141-.428,28.636-1.166,42.981a5.157,5.157,0,0,1-4.773,4.875c-13.49.568-23.463,3.285-41.787,0.9C5.948,56.807,2.348,54.2,1.9,51.7-0.683,37.877.2,23.508,2.194,8.757a8.71,8.71,0,0,1,5.66-6.473"
                        />
                        <path
                          id="Bar"
                          className="cls-2"
                          d="M16,17H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,17Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,27Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,37Z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
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
      <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
    </header>
  );
};
export default Header1;
