import Title from "@/application/projects/Title";
import Portfolio from "@/application/projects/Portfolio";
import RunPHP from "@/application/projects/RunPHP";
import TimersExercicesSeries from "@/application/projects/TimersExercicesSeries";

export default function Projects() {
  return (
    <section className="h-auto min-h-screen">
      <Title />
      <Portfolio />
      <RunPHP />
      <TimersExercicesSeries />
    </section>
  );
}
