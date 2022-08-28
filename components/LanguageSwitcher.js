import { useRouter } from "next/router";
import Link from "next/link";

import Language from "./Language";
import SelectedLanguage from "./SelectedLanguage";

export default function LanguageSwitcher() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  const dropDown = languagesCodes.map((languageCode) => (
    <Link key={languageCode} href={languageCode} locale={languageCode}>
      <a>
        <Language languageCode={languageCode}></Language>
      </a>
    </Link>
  ));
  return <SelectedLanguage selectedLanguageCode={selectedLanguageCode} />;
}
