import Title from "@/controller/main/Title";
import SubTitle from "@/controller/main/SubTitle";
import Avatar from "@/controller/main/Avatar";
import AboutMe from "@/controller/main/AboutMe";

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
