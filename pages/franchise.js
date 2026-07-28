import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Franchise = () => {
  return (
    <Layout bodyClass={"franchise"}>
      <PageBanner pageName={"Franchise"} pageTitle={"Franchise With Us"} />
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-image ps-re">
                <div className="image">
                  <img
                    src="assets/images/common/sc-aboutus-2.jpg"
                    alt="Brighter Launchpad classroom"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Franchise</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Own A Brighter Launchpad In Your Community
                  </h2>
                </div>
                <div className="inner">
                  <p className="wrap f-mulish clr-pri-4">
                    Join a growing network of early-childhood education
                    centers built on a proven curriculum, hands-on training,
                    and a support team invested in your success.
                  </p>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Proven Curriculum</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Site Selection Support</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Marketing &amp; Enrollment Help</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Ongoing Training</p>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="fl-btn st-11">
                      <span className="inner">Request Info</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Why Partner With Us</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Everything You Need To Launch And Grow
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-faq wow fadeIn animated">
                <div className="image">
                  <img src="assets/images/common/sc-faq1.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Proven Playbook</h4>
                  <p className="desc">
                    A tested curriculum and operations playbook so you can
                    open with confidence.
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Learn More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-faq active wow fadeIn animated">
                <div className="image">
                  <img src="assets/images/common/sc-faq2.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Training &amp; Support</h4>
                  <p className="desc">
                    Hands-on onboarding and ongoing coaching for you and your
                    staff.
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Learn More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-faq wow fadeIn animated">
                <div className="image">
                  <img src="assets/images/common/sc-faq3.png" alt="Image" />
                </div>
                <div className="content">
                  <h4>Marketing Support</h4>
                  <p className="desc">
                    Local marketing and enrollment tools to help fill your
                    classrooms.
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-5">
                      <span className="inner">Learn More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Franchise;
