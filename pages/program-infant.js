import PageBanner from "../src/components/PageBanner";
import ProgramDetail from "../src/components/ProgramDetail";
import Layout from "../src/layouts/Layout";
import { programs } from "../src/data/programs";

const program = programs.find((p) => p.slug === "program-infant");
const otherPrograms = programs.filter((p) => p.slug !== program.slug);

const ProgramInfant = () => {
  return (
    <Layout bodyClass={["program-detail", "program-infant-page"]}>
      <PageBanner pageName={program.name} />
      <ProgramDetail program={program} otherPrograms={otherPrograms} />
    </Layout>
  );
};
export default ProgramInfant;
