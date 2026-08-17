import Link from "next/link";
import Seo from "../src/components/seo/Seo";
import Layout from "../src/layouts/Layout";

const PAGE_TITLE = "Page Not Found | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "The page you're looking for doesn't exist. Find a childcare spot or explore franchise opportunities with Brighter Launchpad.";

const NotFound = () => {
  return (
    <Layout bodyClass="error-404">
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/404/"
        noindex
      />
      <section className="tf-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" style={{ padding: "80px 0" }}>
              <h1 className="title clr-pri-2">Page Not Found</h1>
              <p className="wrap f-mulish clr-pri-4" style={{ margin: "0 auto 32px", maxWidth: 520 }}>
                We couldn&rsquo;t find the page you were looking for. Here are
                a couple of places to start instead:
              </p>
              <div className="box-btn" style={{ justifyContent: "center", display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/location">
                  <a className="fl-btn st-12">
                    <span className="inner">Find A Childcare Spot</span>
                  </a>
                </Link>
                <Link href="/franchise">
                  <a className="fl-btn st-1">
                    <span className="inner">Explore Franchise Opportunities</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
