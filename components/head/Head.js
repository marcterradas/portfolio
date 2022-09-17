import Head from "next/head";
import { useCustomTranslations } from "../../logic/translations";

export default function CustomHead() {
  const translations = useCustomTranslations("head");
  return (
    <Head>
      <title>{translations("title")}</title>
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="description" content={translations("description")} />
      <meta name="author" content={translations("author")} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charset="UTF-8" />
    </Head>
  );
}
