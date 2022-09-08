import Navbar from "../layout/Navbar";
import Main from "../layout/Main";
import Experience from "../layout/Experience";
import Studies from "../layout/Studies";
import Skills from "../layout/Skills";
import Footer from "../layout/Footer";

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
