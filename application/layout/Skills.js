import { getSkills } from "@/infrastructure/functions/information";
import Title from "@/application/skills/Title";
import Skill from "@/application/skills/Skill";

export default function Skills() {
  const skills = getSkills();
  const SkillsElements = skills.map((skillName) => (
    <Skill key={skillName} skillName={skillName} />
  ));
  return (
    <section className="h-[calc(100vh-13rem)] w-full md:h-[calc(100vh-5rem)]">
      <Title />
      <div className="grid grid-cols-2 px-4 py-2 text-center gap-y-4 md:grid-cols-3">
        {SkillsElements}
      </div>
    </section>
  );
}
