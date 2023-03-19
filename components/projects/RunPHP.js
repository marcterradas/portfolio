import ProjectsInformation from "../../constants/projects.json";
import SectionContainer from "../common/SectionContainer";
import ProjectImage from "../common/ProjectImage";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";

export default function RunPHP() {
  const { runPHP } = ProjectsInformation;
  const { title, link, technologies } = runPHP;
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
