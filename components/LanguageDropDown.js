import Link from "next/link";
import Language from "./Language";

export default function LanguageDropDown({
  selectedLanguageCode,
  languagesCodes,
}) {
  const dropDown = languagesCodes
    .filter((languageCode) => languageCode != selectedLanguageCode)
    .sort()
    .map((languageCode) => (
      <Link key={languageCode} href={languageCode} locale={languageCode}>
        <a className="pr-2 pl-1 z-10 rounded-md cursor-pointer hover:bg-stone-100 transition-colors ease-linear duration-500">
          <Language languageCode={languageCode}></Language>
        </a>
      </Link>
    ));
  return <>{dropDown}</>;
}
