import Title from "@/components/skills/Title";
import SkillsList from "@/constants/skills";
import Skill from "@/components/skills/Skill";

export default function Skills() {
  const SkillsElements = SkillsList.map((skillName) => (
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
