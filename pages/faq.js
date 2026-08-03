import Link from "next/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import { RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const familyFaqs = [
  {
    q: "What ages and programs do you offer?",
    a: "Four programs built around distinct stages of childhood: Infant (birth to 2 years), Toddler/Preschool (2 years to school entry), After-School (school age up to 12), and Summer Camp (school age up to 12, full days through July and August).",
  },
  {
    q: "What is your approach to learning?",
    a: "A play-based, child-led philosophy — Play, Explore, Grow, Belong. Children get long, uninterrupted stretches of time to play, educators follow the child's lead rather than a fixed schedule, and outdoor time happens every day, in every season.",
  },
  {
    q: "What are your hours?",
    a: "Infant and Toddler/Preschool programs run full-time, year-round. After-School runs after school hours during the school year, and Summer Camp runs full days through July and August, booked by the week.",
  },
  {
    q: "Do you provide meals or snacks?",
    a: "Yes. Daily programming at each centre includes age-appropriate meals or snacks and nutrition planning alongside the curriculum.",
  },
  {
    q: "What safety measures are in place?",
    a: "Secure entrances with controlled access and visitor sign-in, practiced emergency protocols (fire drills, lockdown drills, evacuation plans), and clear cleanliness and hygiene standards across every centre.",
  },
  {
    q: "Do you offer subsidies or financial assistance?",
    a: "Many families qualify for federal and provincial affordability programs, such as CWELCC. Reach out to our team and we can walk you through what may be available for your family.",
  },
  {
    q: "Where are your locations?",
    a: (
      <>
        We currently operate centres across New Brunswick under the A2Z
        Learning &amp; Care, Beautiful Beginnings, Brighter Horizon, and
        Serious Fun brands.{" "}
        <Link href="/location">
          <a className="clr-pri-6">See our locations</a>
        </Link>
        .
      </>
    ),
  },
  {
    q: "How do I enrol my child?",
    a: (
      <>
        Start by reaching out through our{" "}
        <Link href="/contact">
          <a className="clr-pri-6">contact page</a>
        </Link>{" "}
        to book a tour — we&rsquo;ll walk you through availability, routines,
        and next steps for your child&rsquo;s age group.
      </>
    ),
  },
];

const franchiseFaqs = [
  {
    q: "Do I need childcare experience to franchise with Brighter Launchpad?",
    a: "No. Full training is provided, covering everything from curriculum and daily operations to licensing and staffing — no early-childhood background required.",
  },
  {
    q: "What kind of support do I receive?",
    a: "A structured onboarding program and hands-on mentoring, site selection and lease negotiation support, curriculum and staffing frameworks, a dedicated support contact, group purchasing, and marketing assistance — before and after you open.",
  },
  {
    q: "Can I invest without running the centre day-to-day?",
    a: "We welcome investors, and value mission-aligned, involved partnerships above all. A manager-operator model can be discussed for those who want a more hands-off role.",
  },
  {
    q: "Can I convert my existing daycare into a Brighter Launchpad?",
    a: "Yes. We work with existing operators to rebrand and transition their centre onto our play-based model and support systems.",
  },
  {
    q: "How do I get started, and what's the process?",
    a: "A five-step path: an introductory call and information pack, a deeper look at our model and values, a detailed discovery and investment overview, paperwork with an independent-advice period, and finally site setup, training, and launch.",
  },
  {
    q: "Where are territories available?",
    a: "We review territory availability and site options individually with every candidate as part of the discovery process — reach out and we'll walk you through what's open in your area.",
  },
  {
    q: "What does the investment include?",
    a: "Your investment covers the brand, training, operating systems, and hands-on launch support — not just a licence to use our name. We keep specific figures for a real conversation: request our franchise information pack or book a call for the full picture.",
  },
  {
    q: "What makes Brighter Launchpad different?",
    a: "A warm, play-based philosophy families already trust, backed by a proven multi-centre operator rather than a first-time concept — real centres, real families, real results.",
  },
];

const FaqList = ({ items }) => (
  <Accordion defaultActiveKey="0">
    <div className="flat-accordion">
      {items.map((item, i) => (
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
);

const FAQs = () => {
  return (
    <Layout bodyClass={"faq"}>
      <PageBanner pageName={"FAQs"} />
      <section className="tf-section tf-faq-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Asked Questions</span>
                  <RightArrow />
                </div>
                <h2 className="title">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"Families"}>
                <div className="flat-tabs tab-faq m-t50">
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link as={"li"} eventKey={"Families"}>
                      <span>For Families</span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"Franchise"}>
                      <span>For Franchise Partners</span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"Families"}>
                      <div className="content-inner">
                        <FaqList items={familyFaqs} />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"Franchise"}>
                      <FaqList items={franchiseFaqs} />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default FAQs;
