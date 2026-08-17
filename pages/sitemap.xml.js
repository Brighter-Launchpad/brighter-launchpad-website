import { SITE_URL } from "../src/lib/seo";

// Hand-maintained list of real, indexable pages. Deliberately excludes the
// leftover template pages (classes, teacher, shop, etc. — see SEO_AUDIT.md)
// and /locations (a redirect shim, not a page).
const STATIC_PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about/", priority: "0.8", changefreq: "monthly" },
  { path: "/franchise/", priority: "0.9", changefreq: "monthly" },
  { path: "/program/", priority: "0.9", changefreq: "monthly" },
  { path: "/program-infant/", priority: "0.8", changefreq: "monthly" },
  { path: "/program-toddler-preschool/", priority: "0.8", changefreq: "monthly" },
  { path: "/program-after-school/", priority: "0.8", changefreq: "monthly" },
  { path: "/program-summer-camp/", priority: "0.8", changefreq: "monthly" },
  { path: "/location/", priority: "0.9", changefreq: "monthly" },
  { path: "/contact/", priority: "0.7", changefreq: "yearly" },
  { path: "/gallery/", priority: "0.5", changefreq: "monthly" },
  { path: "/faq/", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/", priority: "0.6", changefreq: "weekly" },
  { path: "/blog-choosing-daycare/", priority: "0.5", changefreq: "yearly" },
  { path: "/blog-early-childhood-education/", priority: "0.5", changefreq: "yearly" },
  { path: "/blog-play-based-learning/", priority: "0.5", changefreq: "yearly" },
  { path: "/careers/", priority: "0.4", changefreq: "monthly" },
  { path: "/privacy-policy/", priority: "0.2", changefreq: "yearly" },
  { path: "/terms-of-use/", priority: "0.2", changefreq: "yearly" },
  { path: "/anti-bias-statement/", priority: "0.3", changefreq: "yearly" },
];

const buildSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PATHS.map(
  ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(buildSitemap());
  res.end();
  return { props: {} };
};

export default Sitemap;
