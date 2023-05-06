import { router } from "@/infrastructure/functions/router";
import LanguageDropDown from "@/controller/navbar/LanguageDropDown";
import Curriculum from "@/components/navbar/Curriculum";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = router();

  return (
    <nav className="flex items-center justify-center w-full h-16 sm:justify-end">
      <Curriculum />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
