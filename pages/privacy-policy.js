import Head from "next/head";
import Layout from "../src/layouts/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout bodyClass="privacy-policy">
      <Head>
        <title>Privacy Policy | Brighter Launchpad</title>
        <meta
          name="description"
          content="How Brighter Launchpad collects, uses, and protects your family's information, including our use of cookies."
        />
      </Head>
      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="title clr-pri-2">Privacy Policy</h1>
              <p className="wrap f-mulish clr-pri-4">
                Brighter Launchpad respects your family&rsquo;s privacy. This
                page explains, in plain terms, how we handle the information
                you share with us when you contact us, ask about enrolment,
                or subscribe to our newsletter.
              </p>
              <h2 className="title clr-pri-2">Information We Collect</h2>
              <p className="wrap f-mulish clr-pri-4">
                We only collect information you choose to give us &mdash;
                such as your name, phone number, and email address &mdash;
                when you reach out through our contact form, call, or email a
                centre directly.
              </p>
              <h2 className="title clr-pri-2">How We Use It</h2>
              <p className="wrap f-mulish clr-pri-4">
                We use this information to respond to your enquiries, discuss
                enrolment, and, if you subscribe, to send occasional updates
                from Brighter Launchpad. We do not sell your information to
                third parties.
              </p>
              <h2 className="title clr-pri-2" id="cookies">
                Cookie Information
              </h2>
              <p className="wrap f-mulish clr-pri-4">
                Our website may use small cookie files to help pages load
                correctly and to understand, in an anonymous way, how the
                site is used so we can keep improving it. You can control or
                disable cookies through your browser settings at any time.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                If you have questions about this policy, please contact us at{" "}
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

export default PrivacyPolicy;
