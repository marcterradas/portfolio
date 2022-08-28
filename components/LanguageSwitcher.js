import { useRouter } from "next/router";
import Language from "./Language";

export default function LanguageSwitcher() {
  const { locales } = useRouter();
  const langaugesComponents = locales.map((language) => (
    <Language key={language} languageCode={language}></Language>
  ));
  return <div>{langaugesComponents}</div>;
}
