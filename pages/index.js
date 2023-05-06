import Head from "@/controller/Head";
import Navbar from "@/components/layout/Navbar";
import Main from "@/components/layout/Main";
import Experience from "@/components/layout/Experience";
import Studies from "@/components/layout/Studies";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import Footer from "@/components/layout/Footer";

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
