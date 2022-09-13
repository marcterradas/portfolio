import Title from "../components/skills/Title";
import SkillsList from "../constants/skills";
import Skill from "../components/skills/Skill";

export default function Skills() {
  const SkillsElements = SkillsList.map((skillName) => (
    <Skill key={skillName} skillName={skillName} />
  ));
  return (
    <section className="h-[calc(100vh-4rem)]">
      <Title />
      <div>{SkillsElements}</div>
    </section>
  );
}
