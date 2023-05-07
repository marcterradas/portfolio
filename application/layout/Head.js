import Head from "@/infrastructure/components/Head";
import { getTranslations } from "@/infrastructure/functions/translations";
import Skills from "@/constants/skills";

export default function CustomHead() {
  const translations = getTranslations("head");
  const keywords = Skills.join(",");

  return (
    <Head>
      <title>{translations("title")}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={translations("description")} />
      <meta name="author" content={translations("author")} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
    </Head>
  );
}