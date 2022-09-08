import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Main";
import Experience from "../components/layout/Experience";

export default function Home() {
  return (
    <div className="m-auto max-w-screen-2xl">
      <Navbar />
      <Main />
      <Experience />
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
