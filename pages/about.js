import Head from "next/head";
import AboutHero from "../src/components/about/AboutHero";
import AboutTestimonials from "../src/components/about/AboutTestimonials";
import ClosingDualCTA from "../src/components/about/ClosingDualCTA";
import FranchiseBlock from "../src/components/about/FranchiseBlock";
import MissionVisionPurpose from "../src/components/about/MissionVisionPurpose";
import OurStory from "../src/components/about/OurStory";
import OurValues from "../src/components/about/OurValues";
import PlayExploreGrowBelong from "../src/components/about/PlayExploreGrowBelong";
import TeamSection from "../src/components/about/TeamSection";
import WhyBrighterLaunchpad from "../src/components/about/WhyBrighterLaunchpad";
import { sharedContact } from "../src/data/locations";
import Layout from "../src/layouts/Layout";

const SITE_URL = "https://www.brighterlaunchpad.ca";
const PAGE_URL = `${SITE_URL}/about/`;
const PAGE_TITLE = "About Us | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "Meet the people and the story behind Brighter Launchpad — a licensed early learning franchise built on play, exploration, growth, and belonging across New Brunswick.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: PAGE_URL,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brighter Launchpad",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/images/logo/logodark.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: sharedContact.phoneTel,
      email: sharedContact.email,
      contactType: "customer service",
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: PAGE_TITLE,
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  about: {
    "@type": "Organization",
    name: "Brighter Launchpad",
  },
};

const About = () => {
  return (
    <Layout bodyClass={["about", "about-page"]}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/images/common/gallery-home-kids-huddle.jpg`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
      </Head>

      <AboutHero />
      <OurStory />
      <MissionVisionPurpose />
      <PlayExploreGrowBelong />
      <OurValues />
      <WhyBrighterLaunchpad />
      <TeamSection />
      <AboutTestimonials />
      <FranchiseBlock />
      <ClosingDualCTA />
    </Layout>
  );
};

export default About;
