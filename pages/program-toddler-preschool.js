import PageBanner from "../src/components/PageBanner";
import ProgramDetail from "../src/components/ProgramDetail";
import Layout from "../src/layouts/Layout";
import { programs } from "../src/data/programs";

const program = programs.find((p) => p.slug === "program-toddler-preschool");
const otherPrograms = programs.filter((p) => p.slug !== program.slug);

const ProgramToddlerPreschool = () => {
  return (
    <Layout bodyClass={["program-detail", "program-toddler-preschool-page"]}>
      <PageBanner pageName={program.name} />
      <ProgramDetail program={program} otherPrograms={otherPrograms} />
    </Layout>
  );
};
export default ProgramToddlerPreschool;
