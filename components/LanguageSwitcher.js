import { useRouter } from "next/router";
import Link from "next/link";

import Language from "./Language";
import SelectedLanguage from "./SelectedLanguage";

export default function LanguageSwitcher() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  const dropDown = languagesCodes
    .filter((languageCode) => languageCode != selectedLanguageCode)
    .sort()
    .map((languageCode) => (
      <Link key={languageCode} href={languageCode} locale={languageCode}>
        <a className="pr-2 pl-1 cursor-pointer hover:bg-stone-100 transition-colors ease-linear duration-500">
          <Language languageCode={languageCode}></Language>
        </a>
      </Link>
    ));
  return (
    <>
      <SelectedLanguage selectedLanguageCode={selectedLanguageCode} />
      {dropDown}
    </>
  );
}
