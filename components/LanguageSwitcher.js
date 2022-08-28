import { useRouter } from "next/router";
import Link from "next/link";

import Languages from "../constants/languages.json";

export default function LanguageSwitcher() {
  const { locales } = useRouter();
  const langaugesComponents = locales.map((language) => (
    <Link key={language} href={language} locale={language}>
      {Languages[language]}
    </Link>
  ));
  return <div>{langaugesComponents}</div>;
}
