import ProjectsInformation from "../../constants/projects.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";

export default function Portfolio() {
  const { portfolio } = ProjectsInformation;
  const { title, link, technologies } = portfolio;
  const skillsStr = technologies.toString();
  return (
    <SectionContainer>
      <div> image ...</div>
      <Subtitle>{title}</Subtitle>
      <Paragraph>Description ...</Paragraph>
      <Paragraph>{skillsStr}</Paragraph>
    </SectionContainer>
  );
}
