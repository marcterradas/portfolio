// import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function Home() {
  //   const t = useTranslations("home");
  //   return <div>{t("language")}</div>;
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
