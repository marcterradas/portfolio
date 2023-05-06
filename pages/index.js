import Head from "@/controller/layout/Head";
import Navbar from "@/controller/layout/Navbar";
import Main from "@/controller/layout/Main";
import Experience from "@/controller/layout/Experience";
import Studies from "@/controller/layout/Studies";
import Projects from "@/controller/layout/Projects";
import Skills from "@/controller/layout/Skills";
import Footer from "@/controller/layout/Footer";

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
