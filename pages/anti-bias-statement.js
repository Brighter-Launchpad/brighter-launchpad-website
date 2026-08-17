import Seo from "../src/components/seo/Seo";
import Layout from "../src/layouts/Layout";

const PAGE_PATH = "/anti-bias-statement/";
const PAGE_TITLE = "Anti-Bias Statement | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "Brighter Launchpad's commitment to an inclusive, welcoming environment for every child and family.";

const AntiBiasStatement = () => {
  return (
    <Layout bodyClass="anti-bias-statement">
      <Seo title={PAGE_TITLE} description={PAGE_DESCRIPTION} path={PAGE_PATH} />
      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="title clr-pri-2">Anti-Bias Statement</h1>
              <p className="wrap f-mulish clr-pri-4">
                Every child and family who walks through our doors deserves
                to feel welcomed, respected, and valued for who they are.
                Brighter Launchpad is committed to building centres where
                children of every background, ability, family structure, and
                culture belong.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                We strive to reflect this commitment in how our educators
                speak with children, the stories and materials we share, and
                the way we welcome every family into our community. Belonging
                is not an afterthought at Brighter Launchpad &mdash; it is
                part of how we play, explore, and grow together every day.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                If you ever have a question or concern about how this
                commitment shows up at your centre, please reach out to us at{" "}
                <a href="mailto:admin@brighterlaunchpad.ca">
                  admin@brighterlaunchpad.ca
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AntiBiasStatement;
