import PageBanner from "../src/components/PageBanner";
import ProgramDetail from "../src/components/ProgramDetail";
import Seo from "../src/components/seo/Seo";
import Layout from "../src/layouts/Layout";
import { buildBreadcrumbSchema } from "../src/lib/seo";
import { programs } from "../src/data/programs";

const program = programs.find((p) => p.slug === "program-infant");
const otherPrograms = programs.filter((p) => p.slug !== program.slug);

const PAGE_PATH = `/${program.slug}/`;
const PAGE_TITLE = "Infant Daycare Program (Birth–2) | Brighter Launchpad";
const PAGE_DESCRIPTION = `${program.tagline} Licensed infant care, ${program.ageRange.toLowerCase()}, at our New Brunswick centres.`;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Programs", path: "/program/" },
  { name: program.name, path: PAGE_PATH },
]);

const ProgramInfant = () => {
  return (
    <Layout bodyClass={["program-detail", "program-infant-page"]}>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        jsonLd={breadcrumbSchema}
      />
      <PageBanner pageName={program.name} />
      <ProgramDetail program={program} otherPrograms={otherPrograms} />
    </Layout>
  );
};
export default ProgramInfant;
