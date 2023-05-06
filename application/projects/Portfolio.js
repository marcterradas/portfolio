import ProjectsInformation from "@/constants/projects.json";
import SectionContainer from "@/application/common/SectionContainer";
import ProjectImage from "@/application/common/ProjectImage";
import Subtitle from "@/application/common/Subtitle";
import Paragraph from "@/application/common/Paragraph";
import Link from "@/application/common/Link";
import Skill from "@/application/common/Skill";
import { useCustomTranslations } from "@/infrastructure/functions/translations";

export default function Portfolio() {
  const { portfolio } = ProjectsInformation;
  const { title, link, technologies } = portfolio;
  const translations = useCustomTranslations("projects");
  const Skills = technologies.map((skill) => {
    return <Skill key={skill}>{skill}</Skill>;
  });

  return (
    <SectionContainer>
      <div className="lg:flex">
        <div className="lg:w-3/6">
          <Subtitle>{title}</Subtitle>
          <Paragraph>{translations("portfolio.description")}</Paragraph>
          <Link href={link}>
            <b>{translations("repository")}</b>
          </Link>
          <div className="flex mt-2">{Skills}</div>
        </div>
        <div className="lg:w-3/6">
          <ProjectImage image="portfolio" />
        </div>
      </div>
    </SectionContainer>
  );
}
