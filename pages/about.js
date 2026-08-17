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
import Seo from "../src/components/seo/Seo";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  organizationSchema,
  SITE_NAME,
} from "../src/lib/seo";
import Layout from "../src/layouts/Layout";

const PAGE_PATH = "/about/";
const PAGE_TITLE = "About Us | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "Meet the people and the story behind Brighter Launchpad — a licensed early learning franchise built on play, exploration, growth, and belonging across New Brunswick.";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About Us", path: PAGE_PATH },
]);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: PAGE_TITLE,
  url: absoluteUrl(PAGE_PATH),
  description: PAGE_DESCRIPTION,
  about: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

const About = () => {
  return (
    <Layout bodyClass={["about", "about-page"]}>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        jsonLd={[breadcrumbSchema, organizationSchema, aboutPageSchema]}
      />

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
