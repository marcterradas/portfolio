import Title from "@/controller/projects/Title";
import Portfolio from "@/controller/projects/Portfolio";
import RunPHP from "@/controller/projects/RunPHP";
import TimersExercicesSeries from "@/controller/projects/TimersExercicesSeries";

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
