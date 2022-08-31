import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
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
