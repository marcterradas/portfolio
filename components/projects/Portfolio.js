import ProjectsInformation from "../../constants/projects.json";
import SectionContainer from "../common/SectionContainer";
import ProjectImage from "../common/ProjectImage";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";
import Link from "../common/Link";
import { useCustomTranslations } from "../../logic/translations";

export default function Portfolio() {
  const { portfolio } = ProjectsInformation;
  const { title, link, technologies } = portfolio;
  const skillsStr = technologies.toString();
  const translations = useCustomTranslations("projects");

  return (
    <SectionContainer>
      <ProjectImage />
      <Subtitle>{title}</Subtitle>
      <Paragraph>{translations("portfolio.description")}</Paragraph>
      <Paragraph>{skillsStr}</Paragraph>
      <Link href={link}>{translations("repository")}</Link>
    </SectionContainer>
  );
}
