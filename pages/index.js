import Head from "@/controller/Head";
import Navbar from "@/controller/Navbar";
import Main from "@/controller/Main";
import Experience from "@/controller/Experience";
import Studies from "@/controller/Studies";
import Projects from "@/controller/Projects";
import Skills from "@/controller/Skills";
import Footer from "@/controller/Footer";

export default function Home() {
  return (
    <>
      <Head />
      <div className="px-4 m-auto max-w-screen-2xl">
        <Navbar />
        <Main />
        <Experience />
        <Studies />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default,
    },
  };
}
