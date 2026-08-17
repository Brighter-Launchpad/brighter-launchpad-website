import { sharedContact } from "../data/locations";

// Single source of truth for the production domain. The codebase previously
// had "https://www.brighterlaunchpad.ca" hardcoded into a couple of pages'
// canonical/OG tags — that domain doesn't serve the site (brighterlaunchpad.com
// does, confirmed via the live Vercel deployment), so every canonical/OG/schema
// URL must be built from this constant instead of being retyped per page.
export const SITE_URL = "https://www.brighterlaunchpad.com";
export const SITE_NAME = "Brighter Launchpad";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/common/gallery-home-kids-huddle.jpg`;

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/images/logo/logodark.png`,
  sameAs: Object.values(sharedContact.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: sharedContact.phoneTel,
      email: sharedContact.email,
      contactType: "customer service",
    },
  ],
};

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: absoluteUrl(path),
  })),
});
