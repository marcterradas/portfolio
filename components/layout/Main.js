import Title from "../description/Title";
import SubTitle from "../description/SubTitle";
import Avatar from "../description/Avatar";

export default function Main() {
  return (
    <main className="flex flex-wrap justify-center pt-2 mt-16">
      <Title />
      <SubTitle />
      <Avatar />
    </main>
  );
}
