import Link from "next/link";
import Language from "./Language";
import Languages from "../../constants/languages.json";

export default function LanguageDropDownElements({
  selectedLanguageCode,
  languagesCodes,
  closePopover,
}) {
  const dropDown = languagesCodes
    .filter((languageCode) => languageCode != selectedLanguageCode)
    .sort()
    .map((languageCode) => (
      <Link
        key={languageCode}
        href={languageCode}
        locale={languageCode}
        passHref
      >
        <a
          onClick={closePopover}
          className="z-10 pl-1 pr-2 transition-colors duration-300 ease-linear rounded-md cursor-pointer hover:bg-stone-200"
          title={Languages[languageCode]}
        >
          <Language languageCode={languageCode}></Language>
        </a>
      </Link>
    ));
  return <>{dropDown}</>;
}
