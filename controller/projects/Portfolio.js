import ProjectsInformation from "@/constants/projects.json";
import SectionContainer from "@/controller/common/SectionContainer";
import ProjectImage from "@/controller/common/ProjectImage";
import Subtitle from "@/controller/common/Subtitle";
import Paragraph from "@/controller/common/Paragraph";
import Link from "@/controller/common/Link";
import Skill from "@/controller/common/Skill";
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
