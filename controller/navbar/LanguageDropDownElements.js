import Link from "next/link";
import Language from "@/controller/navbar/Language";
import Languages from "@/constants/languages.json";

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
        onClick={closePopover}
        title={Languages[languageCode]}
        className="z-10 pl-1 pr-2 transition-colors duration-300 ease-linear rounded-sm cursor-pointer w-36 hover:bg-stone-200"
      >
        <Language languageCode={languageCode}></Language>
      </Link>
    ));
  return <>{dropDown}</>;
}
