import Title from "@/components/main/Title";
import SubTitle from "@/components/main/SubTitle";
import Avatar from "@/components/main/Avatar";
import AboutMe from "@/components/main/AboutMe";

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
