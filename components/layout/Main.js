import Title from "../description/Title";
import SubTitle from "../description/SubTitle";
import Avatar from "../description/Avatar";

export default function Main() {
  return (
    <main className="flex flex-wrap justify-center h-[calc(100vh-4rem)]">
      <Title />
      <SubTitle />
      <Avatar />
    </main>
  );
}
