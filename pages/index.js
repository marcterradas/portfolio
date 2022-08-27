import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return <div>{t("language")}</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default,
    },
  };
}
