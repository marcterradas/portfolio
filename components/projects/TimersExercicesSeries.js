import ProjectsInformation from "../../constants/projects.json";
import SectionContainer from "../common/SectionContainer";
import ProjectImage from "../common/ProjectImage";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";

export default function TimersExercicesSeries() {
  const { timersExercisesSeries } = ProjectsInformation;
  const { title, link, technologies } = timersExercisesSeries;
  const skillsStr = technologies.toString();
  return (
    <SectionContainer>
      <ProjectImage />
      <Subtitle>{title}</Subtitle>
      <Paragraph>Description ...</Paragraph>
      <Paragraph>{skillsStr}</Paragraph>
    </SectionContainer>
  );
}
