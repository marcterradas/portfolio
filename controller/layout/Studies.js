import Title from "@/controller/studies/Title";
import Ce from "@/controller/studies/Ce";
import Daw from "@/controller/studies/Daw";
import B2 from "@/controller/studies/B2";

export default function Studies() {
  return (
    <section className="h-auto min-h-screen">
      <Title />
      <Ce />
      <Daw />
      <B2 />
    </section>
  );
}
