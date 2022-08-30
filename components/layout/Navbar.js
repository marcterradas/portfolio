import { useRouter } from "next/router";
import LanguageDropDown from "../language/LanguageDropDown";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="fixed w-full h-11 flex justify-end pr-4">
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
