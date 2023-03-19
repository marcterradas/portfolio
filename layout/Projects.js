import Title from "../components/projects/Title";
import Portfolio from "../components/projects/Portfolio";
import RunPHP from "../components/projects/RunPHP";
import TimersExercicesSeries from "../components/projects/TimersExercicesSeries";

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
