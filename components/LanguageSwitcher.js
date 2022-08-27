import { useRouter } from "next/router";

const LANGUAGES = {
  en: "English",
  es: "Español",
  cat: "Català",
};

export default function LanguageSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const langaugesComponents = locales.map((language) => (
    <option key={language}>{LANGUAGES[language]}</option>
  ));
  return (
    <div>
      <select>{langaugesComponents}</select>
    </div>
  );
}
