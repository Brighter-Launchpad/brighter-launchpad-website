import PageBanner from "../src/components/PageBanner";
import ProgramDetail from "../src/components/ProgramDetail";
import Layout from "../src/layouts/Layout";
import { programs } from "../src/data/programs";

const program = programs.find((p) => p.slug === "program-after-school");
const otherPrograms = programs.filter((p) => p.slug !== program.slug);

const ProgramAfterSchool = () => {
  return (
    <Layout bodyClass={"program-detail"}>
      <PageBanner pageName={program.name} />
      <ProgramDetail program={program} otherPrograms={otherPrograms} />
    </Layout>
  );
};
export default ProgramAfterSchool;
