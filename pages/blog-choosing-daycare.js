import PageBanner from "../src/components/PageBanner";
import BlogDetail from "../src/components/BlogDetail";
import Seo from "../src/components/seo/Seo";
import Layout from "../src/layouts/Layout";
import { absoluteUrl, buildBreadcrumbSchema, SITE_NAME } from "../src/lib/seo";
import { blogPosts } from "../src/data/blog";

const post = blogPosts.find((p) => p.slug === "blog-choosing-daycare");
const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

const PAGE_PATH = `/${post.slug}/`;
const PAGE_TITLE = "Choosing the Right Daycare | Brighter Launchpad";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog/" },
  { name: post.title, path: PAGE_PATH },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: absoluteUrl(post.image),
  datePublished: post.date,
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

const BlogChoosingDaycare = () => {
  return (
    <Layout bodyClass={["blog", "blog-post-page"]}>
      <Seo
        title={PAGE_TITLE}
        description={post.excerpt}
        path={PAGE_PATH}
        image={absoluteUrl(post.image)}
        type="article"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />
      <PageBanner pageName={"Blog"} pageTitle={post.title} />
      <BlogDetail post={post} otherPosts={otherPosts} />
    </Layout>
  );
};
export default BlogChoosingDaycare;
