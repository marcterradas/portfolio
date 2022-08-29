import { useRouter } from "next/router";
// import { Popover, Transition } from "@headlessui/react";
import SelectedLanguage from "./SelectedLanguage";
import LanguageDropDown from "./LanguageDropDown";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="flex justify-end pr-2">
      <SelectedLanguage selectedLanguageCode={selectedLanguageCode} />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
