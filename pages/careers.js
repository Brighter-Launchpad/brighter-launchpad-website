import Head from "next/head";
import Layout from "../src/layouts/Layout";

const Careers = () => {
  return (
    <Layout bodyClass="careers">
      <Head>
        <title>Careers | Brighter Launchpad</title>
        <meta
          name="description"
          content="Interested in joining the Brighter Launchpad family? Get in touch to learn about opportunities at our centres."
        />
      </Head>
      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="title clr-pri-2">Careers at Brighter Launchpad</h1>
              <p className="wrap f-mulish clr-pri-4">
                We&rsquo;re always glad to hear from caring, playful people
                who want to help children learn and grow. We don&rsquo;t
                have specific openings listed here right now, but we&rsquo;d
                love to hear from you.
              </p>
              <p className="wrap f-mulish clr-pri-4">
                Reach out to us at{" "}
                <a href="mailto:admin@brighterlaunchpad.ca">
                  admin@brighterlaunchpad.ca
                </a>{" "}
                or call{" "}
                <a href="tel:+16133052982">+1 613-305-2982</a> and tell us a
                little about yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
