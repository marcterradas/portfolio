import Title from "../description/Title";
import SubTitle from "../description/SubTitle";
import Avatar from "../description/Avatar";

export default function Main() {
  return (
    <main className="flex flex-wrap justify-center mt-8">
      <Title />
      <SubTitle />
      <Avatar />
    </main>
  );
}
