import { useRouter } from "next/router";
import LanguageDropDown from "../language/LanguageDropDown";
import Curriculum from "../buttons/Curriculum";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="fixed flex items-center justify-end w-full h-16 px-4">
      <Curriculum />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
