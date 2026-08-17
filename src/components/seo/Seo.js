import Head from "next/head";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "../../lib/seo";

/**
 * Shared per-route SEO head tags: title, meta description, canonical, OG,
 * Twitter Card, robots, plus arbitrary JSON-LD blocks. Pages Router has no
 * Metadata API, so this is the single place that pattern lives instead of
 * being hand-rolled per page.
 *
 * `path` must be the site-relative path with a leading slash, e.g. "/about/".
 * `jsonLd` accepts one schema object or an array of them.
 */
const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}) => {
  const url = absoluteUrl(path);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default Seo;
