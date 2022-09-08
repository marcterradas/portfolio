import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Main";
import Experience from "../components/layout/Experience";
import Studies from "../components/layout/Studies";
import Skills from "../components/layout/Skills";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="m-auto max-w-screen-2xl">
      <Navbar />
      <Main />
      <Experience />
      <Studies />
      <Skills />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default,
    },
  };
}
