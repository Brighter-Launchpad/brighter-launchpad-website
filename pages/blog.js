import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Seo from "../src/components/seo/Seo";
import { LeftArrow, RightArrow } from "../src/Icons";
import { buildBreadcrumbSchema } from "../src/lib/seo";
import Layout from "../src/layouts/Layout";
import { blogPosts } from "../src/data/blog";

const PAGE_PATH = "/blog/";
const PAGE_TITLE = "Blog | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "News and advice from Brighter Launchpad on early childhood education, choosing a daycare, and play-based learning.";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: PAGE_PATH },
]);

const Blog = () => {
  return (
    <Layout bodyClass={["blog", "blog-listing-page"]}>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        jsonLd={breadcrumbSchema}
      />
      <PageBanner pageName={"Blog"} pageTitle={"News & Advice From Our Team"} />
      <section className="tf-section tf-blog-grid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Our Blog</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Tips And Insights For Growing Families
                </h2>
              </div>
            </div>
            {blogPosts.map((post) => (
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-12"
                key={post.slug}
              >
                <div
                  className="box-artice fl-scale st-2 wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <div className="box-feature inner-scale">
                    <Link href={`/${post.slug}`}>
                      <a>
                        <img src={post.image} alt={post.title} />
                      </a>
                    </Link>
                  </div>
                  <div className="box-content">
                    <div className="meta-post st-1">
                      <ul className="fx">
                        <li>
                          <Link href={`/${post.slug}`}>
                            <a className="fx">
                              <i className="far fa-calendar-alt clr-pri-3" />
                              {post.date}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title-article-post">
                      <Link href={`/${post.slug}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h4>
                    <p className="desc f-mulish">{post.excerpt}</p>
                    <div className="btn-rm">
                      <Link href={`/${post.slug}`}>
                        <a className="fl-btn st-4">
                          <span className="inner">read more</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
