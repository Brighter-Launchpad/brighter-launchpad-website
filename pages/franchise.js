import Link from "next/link";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Seo from "../src/components/seo/Seo";
import TestimonialSlider from "../src/components/TestimonialSlider";
import { LeftArrow, RightArrow } from "../src/Icons";
import { buildBreadcrumbSchema } from "../src/lib/seo";
import Layout from "../src/layouts/Layout";

const PAGE_PATH = "/franchise/";
const PAGE_TITLE = "Childcare Franchise Opportunities | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "Own a Brighter Launchpad childcare franchise. A proven, play-based model with recession-resilient demand, government tailwinds, and hands-on support.";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Franchise", path: PAGE_PATH },
]);

const whyInvest = [
  {
    icon: "fal fa-shield-check",
    color: "#ff6666",
    title: "Essential, Recession-Resilient Demand",
    desc: "Childcare isn’t a discretionary expense — it’s what lets parents keep working. Families prioritize it over almost everything else in their budget.",
  },
  {
    icon: "fal fa-landmark",
    color: "#1ab9ff",
    title: "Government Tailwinds",
    desc: "Federal and provincial affordability programs are fueling enrollment growth and putting quality early learning within reach of more families every year.",
  },
  {
    icon: "fal fa-heart",
    color: "#fab319",
    title: "Deeply Rewarding Work",
    desc: "Few businesses let you build real, durable profit while genuinely shaping children’s futures and strengthening your own community.",
  },
];

const whyUs = [
  {
    icon: "fal fa-puzzle-piece",
    color: "#b250fe",
    title: "Play-Based, Child-Led Philosophy",
    desc: "Our Play, Explore, Grow, Belong approach is a warm, inclusive model families already trust across our existing centres.",
  },
  {
    icon: "fal fa-building",
    color: "#2b3c6b",
    title: "A Proven Multi-Centre Operator",
    desc: "You’re not betting on a start-up. Brighter Launchpad is an established group with real centres, real families, and real results.",
  },
  {
    icon: "fal fa-thumbs-up",
    color: "#e6a72a",
    title: "A Brand Families Already Trust",
    desc: "A purpose-driven identity, strong parent testimonials, and a recognizable look and feel you can plug into from day one.",
  },
];

const advantages = [
  {
    icon: "fal fa-award",
    color: "#ff6666",
    title: "Established, Trusted Brand",
    desc: "Step into recognition and family trust that would otherwise take years to build on your own.",
  },
  {
    icon: "fal fa-route",
    color: "#1ab9ff",
    title: "Proven Play-Based Model",
    desc: "A tested curriculum and operations playbook — a roadmap to follow, not guesswork to figure out.",
  },
  {
    icon: "fal fa-graduation-cap",
    color: "#fab319",
    title: "Training & Ongoing Support",
    desc: "No early-childhood background required. We train you and stay beside you long after you open.",
  },
  {
    icon: "fal fa-bullhorn",
    color: "#b250fe",
    title: "Marketing & Enrollment Help",
    desc: "Templates, campaigns, and lead-generation support built to keep your classrooms full.",
  },
  {
    icon: "fal fa-clipboard-check",
    color: "#e6a72a",
    title: "Operations & Compliance Support",
    desc: "Licensing, ratios, curriculum, and regulatory guidance — handled together with you, not left to you.",
  },
  {
    icon: "fal fa-chart-line",
    color: "#2b3c6b",
    title: "Strong Return Potential",
    desc: "An essential service in a high-demand sector, with the durable enrollment that comes with it.",
  },
];

const idealCandidates = [
  "First-time entrepreneurs and career-changers looking for a supported, meaningful business.",
  "Existing childcare operators ready to convert, rebrand, or scale under a stronger brand and system.",
  "Active owner-operators who want to be hands-on in their community.",
  "Investors seeking a durable, essential-service asset, with an operator/manager pathway available for those who want a more hands-off role.",
];

const processSteps = [
  {
    title: "Get To Know Each Other",
    desc: "Submit the enquiry form, receive our franchise information pack, and have an introductory call.",
  },
  {
    title: "Explore & Align",
    desc: "Review our model, values, and the Brighter Launchpad way, and confirm we’re the right fit for each other.",
  },
  {
    title: "Discovery & Commitment",
    desc: "A detailed look at the business, an investment overview, and disclosure documents, plus time to meet the team.",
  },
  {
    title: "Paperwork & Preparation",
    desc: "Agreements, compliance checks, and an independent-advice period before anything is finalized.",
  },
  {
    title: "Launch",
    desc: "Site setup, hands-on training, and the opening day of your own Brighter Launchpad centre.",
  },
];

const faqs = [
  {
    q: "Do I need childcare experience to franchise with Brighter Launchpad?",
    a: "No. Full training is provided, covering everything from curriculum and daily operations to licensing and staffing — no early-childhood background required.",
  },
  {
    q: "Can I convert my existing daycare into a Brighter Launchpad?",
    a: "Yes. We work with existing operators to rebrand and transition their centre onto our play-based model and support systems.",
  },
  {
    q: "What support will I receive before and after opening?",
    a: "Before opening: site selection, lease negotiation guidance, and centre setup support. After opening: a dedicated support contact, group purchasing, marketing assistance, and regular quality check-ins.",
  },
  {
    q: "Where are territories available, and how do I choose a location?",
    a: "We review territory availability and site options with every candidate individually as part of the discovery process — reach out and we’ll walk you through what’s open in your area.",
  },
  {
    q: "Can I invest without running the centre day-to-day?",
    a: "We welcome investors, and value mission-aligned, involved partnerships above all. A manager-operator model can be discussed for those who want a more hands-off role.",
  },
  {
    q: "What are the next steps and typical timeline?",
    a: "It starts with a short enquiry form and an intro call. From there, most candidates move through discovery, agreements, and training toward opening within the timeline discussed together during your calls with us.",
  },
];

const Franchise = () => {
  return (
    <Layout bodyClass={"franchise"}>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        jsonLd={breadcrumbSchema}
      />
      <PageBanner
        pageName={"Franchise"}
        pageTitle={"Own A Brighter Launchpad In Your Community"}
      />

      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-image ps-re">
                <div className="image">
                  <img
                    src="assets/images/common/franchise-main.jpg"
                    alt="Brighter Launchpad staff welcoming a family at the front desk"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Franchise Opportunities</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Grow A Brighter Future With Brighter Launchpad
                  </h2>
                </div>
                <div className="inner">
                  <p className="wrap f-mulish clr-pri-4">
                    What&rsquo;s the last thing a working parent would ever cut
                    from the budget? Their child&rsquo;s care and early
                    learning. Now imagine building a business around that
                    unshakeable need — with a proven system, a warm brand
                    families already love, and a team beside you every step of
                    the way.
                  </p>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Recession-Resilient Industry</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Proven Play-Based System</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">No Experience Required</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">A Team Beside You Every Step</p>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="fl-btn st-11">
                      <span className="inner">Request Franchise Info</span>
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
                  <span className="inner-sub st-1">The Opportunity</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Why Invest In Early Childhood Education?
                </h2>
              </div>
            </div>
            {whyInvest.map((item) => (
              <div className="col-md-4 m-b30" key={item.title}>
                <div className="sc-advantage wow fadeIn animated">
                  <div className="icon" style={{ backgroundColor: item.color }}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
                  <span className="inner-sub st-1">The Brand</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">Why Brighter Launchpad?</h2>
              </div>
            </div>
            {whyUs.map((item) => (
              <div className="col-md-4 m-b30" key={item.title}>
                <div className="sc-advantage wow fadeIn animated">
                  <div className="icon" style={{ backgroundColor: item.color }}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
                  <span className="inner-sub st-1">What You Get</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  The Advantages Of Franchising With Us
                </h2>
              </div>
            </div>
            {advantages.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-12 m-b30"
                key={item.title}
              >
                <div className="sc-advantage wow fadeIn animated">
                  <div className="icon" style={{ backgroundColor: item.color }}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
                  <span className="inner-sub st-1">Full Support</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  What&rsquo;s Included: Training, Support &amp; Systems
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="clr-pri-2 m-b17">Training</h4>
              <ul className="tf-check-list">
                <li>
                  <i className="fas fa-check" />
                  <p>
                    A structured onboarding program and hands-on mentoring, with
                    guidance toward any required qualifications and operating
                    licences.
                  </p>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <p>
                    Ongoing professional development for you and your
                    educators, delivered online and in person.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="clr-pri-2 m-b17">Setup &amp; Operations</h4>
              <ul className="tf-check-list">
                <li>
                  <i className="fas fa-check" />
                  <p>
                    Site selection, lease negotiation support, and hands-on
                    guidance setting up your centre.
                  </p>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <p>
                    Curriculum, daily programming, menus and nutrition, and
                    staffing frameworks — all provided.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="clr-pri-2 m-b17">Continuing Support</h4>
              <ul className="tf-check-list">
                <li>
                  <i className="fas fa-check" />
                  <p>
                    A dedicated support contact, group purchasing power, and
                    regular quality check-ins.
                  </p>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <p>
                    Marketing team support for social, web, and local
                    enrollment campaigns.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-faq">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Is This You?</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">Who We&rsquo;re Looking For</h2>
                <p className="wrap f-mulish clr-pri-4 m-t20">
                  We welcome a range of backgrounds, but we look for the same
                  thing in all of them: people who share our mission and want
                  to be genuinely involved in getting it right.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <ul className="tf-check-list">
                {idealCandidates.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
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
                  <span className="inner-sub st-1">The Process</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  How It Works: The Franchise Process
                </h2>
              </div>
            </div>
            {processSteps.map((step, i) => (
              <div className="col-lg-4 col-md-6 col-12 m-b30" key={step.title}>
                <div className="sc-step wow fadeIn animated">
                  <div className="step-number">{i + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Proof, Not Promises</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Families Already Trust The{" "}
                  <span className="clr-pri-3">Brighter Launchpad</span> Way
                </h2>
                <p className="wrap f-mulish clr-pri-4 m-t20">
                  We&rsquo;re not a start-up on paper — we&rsquo;re an
                  operating group of centres serving real families today under
                  the A2Z Learning &amp; Care, Beautiful Beginnings, Brighter
                  Horizon, and Serious Fun brands.{" "}
                  <Link href="/location">
                    <a className="clr-pri-6">See our centres</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Investment</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  A Supported, Turnkey Path Into An Essential Industry
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <p className="wrap f-mulish clr-pri-4">
                Your investment covers the brand, the training, the operating
                systems, and the hands-on launch support that get your centre
                open and enrolling with confidence — not just a licence to use
                our name.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                Because every market and site is different, we keep specific
                figures for a real conversation rather than a web page.
                Request our franchise information pack or book a call and
                we&rsquo;ll walk you through the full investment picture.
              </p>
              <div className="cta-buttons" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <Link href="/contact">
                  <a className="fl-btn st-1">
                    <span className="inner">Request Info Pack</span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="fl-btn st-11">
                    <span className="inner">Book A Call</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-faq-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Questions</span>
                  <RightArrow />
                </div>
                <h2 className="title">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Accordion defaultActiveKey="0">
                <div className="flat-accordion">
                  {faqs.map((item, i) => (
                    <div className="flat-toggle" key={item.q}>
                      <Accordion.Toggle
                        as={"h6"}
                        eventKey={String(i)}
                        className="toggle-title"
                      >
                        {item.q}
                      </Accordion.Toggle>
                      <Accordion.Collapse as={"div"} eventKey={String(i)}>
                        <div className="toggle-content">
                          <p>{item.a}</p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-cta-band">
                <div className="title-heading">
                  <h2 className="title clr-pri-2">
                    Start The Conversation
                  </h2>
                  <p className="wrap f-mulish clr-pri-4 m-t20">
                    Request your franchise information pack today. No
                    experience needed — just a passion for children and a
                    drive to build something that matters.
                  </p>
                </div>
                <div className="cta-buttons">
                  <Link href="/contact">
                    <a className="fl-btn st-1">
                      <span className="inner">Request Franchise Info</span>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="fl-btn st-11">
                      <span className="inner">Book A Call</span>
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
