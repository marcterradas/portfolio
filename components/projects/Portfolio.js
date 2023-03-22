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
      <div className="lg:flex">
        <div class="lg:w-3/6">
          <Subtitle>{title}</Subtitle>
          <Paragraph>{translations("portfolio.description")}</Paragraph>
          <Paragraph>{skillsStr}</Paragraph>
          <Link href={link}>{translations("repository")}</Link>
        </div>
        <div class="lg:w-3/6">
          <ProjectImage image="portfolio" />
        </div>
      </div>
    </SectionContainer>
  );
}
