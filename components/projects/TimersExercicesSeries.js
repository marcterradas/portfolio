import ProjectsInformation from "../../constants/projects.json";
import SectionContainer from "../common/SectionContainer";
import ProjectImage from "../common/ProjectImage";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";
import Link from "../common/Link";
import Skill from "../common/Skill";
import { useCustomTranslations } from "../../logic/translations";

export default function TimersExercicesSeries() {
  const { timersExercisesSeries } = ProjectsInformation;
  const { title, link, technologies } = timersExercisesSeries;
  const translations = useCustomTranslations("projects");
  const Skills = technologies.map((skill) => {
    return <Skill key={skill}>{skill}</Skill>;
  });

  return (
    <SectionContainer>
      <div className="lg:flex">
        <div class="lg:w-3/6">
          <Subtitle>{title}</Subtitle>
          <Paragraph>
            {translations("timersExercisesSeries.description")}
          </Paragraph>
          <Link href={link}>
            <b>{translations("repository")}</b>
          </Link>
          <div className="flex mt-2">{Skills}</div>
        </div>
        <div class="lg:w-3/6">
          <ProjectImage image="timersExercicesSeries" />
        </div>
      </div>
    </SectionContainer>
  );
}
