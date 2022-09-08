import Title from "../main/Title";
import SubTitle from "../main/SubTitle";
import Avatar from "../main/Avatar";
import AboutMe from "../main/AboutMe";

export default function Main() {
  return (
    <main className="flex flex-wrap justify-center items-center h-[calc(100vh-4rem)]">
      <div>
        <Title />
        <SubTitle />
        <Avatar />
        <AboutMe />
      </div>
    </main>
  );
}
