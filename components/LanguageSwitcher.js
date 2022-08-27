import { useRouter } from "next/router";
import Link from "next/link";

const LANGUAGES = {
  en: "English",
  es: "Español",
  cat: "Català",
};

export default function LanguageSwitcher() {
  const { locales } = useRouter();
  const langaugesComponents = locales.map((language) => (
    <Link key={language} href={language} locale={language}>
      {LANGUAGES[language]}
    </Link>
  ));
  return <div>{langaugesComponents}</div>;
}
