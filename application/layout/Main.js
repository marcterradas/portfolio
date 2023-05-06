import Title from "@/application/main/Title";
import SubTitle from "@/application/main/SubTitle";
import Avatar from "@/application/main/Avatar";
import AboutMe from "@/application/main/AboutMe";

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
