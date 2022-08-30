import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
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
