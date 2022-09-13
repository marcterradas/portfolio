import Title from "../components/skills/Title";
import SkillsList from "../constants/skills";

export default function Skills() {
  const SkillsElements = SkillsList.map((skill) => console.log(skill));
  return (
    <section className="h-[calc(100vh-4rem)]">
      <Title />
    </section>
  );
}
