import Head from "next/head";
import Layout from "../src/layouts/Layout";

const TermsOfUse = () => {
  return (
    <Layout bodyClass="terms-of-use">
      <Head>
        <title>Terms of Use | Brighter Launchpad</title>
        <meta
          name="description"
          content="The terms that govern your use of the Brighter Launchpad website."
        />
      </Head>
      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="title clr-pri-2">Terms of Use</h1>
              <p className="wrap f-mulish clr-pri-4">
                By using this website, you agree to use it respectfully and
                for its intended purpose &mdash; learning about Brighter
                Launchpad, our centres, and how to get in touch or begin
                enrolment.
              </p>
              <h2 className="title clr-pri-2">Website Content</h2>
              <p className="wrap f-mulish clr-pri-4">
                The text, images, and branding on this site belong to
                Brighter Launchpad and may not be copied or reused without
                permission.
              </p>
              <h2 className="title clr-pri-2">No Guarantee of Availability</h2>
              <p className="wrap f-mulish clr-pri-4">
                Enquiring through this website does not guarantee a spot at
                any centre. Enrolment is confirmed directly with the
                relevant Brighter Launchpad centre.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                Questions about these terms can be sent to{" "}
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

export default TermsOfUse;
