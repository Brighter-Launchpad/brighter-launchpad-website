import PageBanner from "../src/components/PageBanner";
import ProgramDetail from "../src/components/ProgramDetail";
import Layout from "../src/layouts/Layout";
import { programs } from "../src/data/programs";

const program = programs.find((p) => p.slug === "program-summer-camp");
const otherPrograms = programs.filter((p) => p.slug !== program.slug);

const ProgramSummerCamp = () => {
  return (
    <Layout bodyClass={["program-detail", "program-summer-camp-page"]}>
      <PageBanner pageName={program.name} />
      <ProgramDetail program={program} otherPrograms={otherPrograms} />
    </Layout>
  );
};
export default ProgramSummerCamp;
