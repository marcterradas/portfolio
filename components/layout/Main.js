import Title from "../description/Title";
import SubTitle from "../description/SubTitle";
import Avatar from "../description/Avatar";
import AboutMe from "../description/AboutMe";

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
