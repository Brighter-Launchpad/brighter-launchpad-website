import PageBanner from "../src/components/PageBanner";
import BlogDetail from "../src/components/BlogDetail";
import Layout from "../src/layouts/Layout";
import { blogPosts } from "../src/data/blog";

const post = blogPosts.find((p) => p.slug === "blog-early-childhood-education");
const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

const BlogEarlyChildhoodEducation = () => {
  return (
    <Layout bodyClass={["blog", "blog-post-page"]}>
      <PageBanner pageName={"Blog"} pageTitle={post.title} />
      <BlogDetail post={post} otherPosts={otherPosts} />
    </Layout>
  );
};
export default BlogEarlyChildhoodEducation;
