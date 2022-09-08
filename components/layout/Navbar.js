import { useRouter } from "next/router";
import LanguageDropDown from "../language/LanguageDropDown";
import Curriculum from "../navbar/Curriculum";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="flex items-center justify-center w-full h-16 px-4 sm:justify-end">
      <Curriculum />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
