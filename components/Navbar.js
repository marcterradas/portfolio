import { useRouter } from "next/router";
import SelectedLanguage from "./SelectedLanguage";
import LanguageDropDown from "./LanguageDropDown";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  function openDropDown() {
    console.log("open drop down ...");
  }

  return (
    <nav className="flex justify-end pr-2">
      <SelectedLanguage
        selectedLanguageCode={selectedLanguageCode}
        openDropDown={openDropDown}
      />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
