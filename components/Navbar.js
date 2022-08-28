import React from "react";
import { useRouter } from "next/router";

import SelectedLanguage from "./SelectedLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="flex justify-end pr-2">
      <SelectedLanguage selectedLanguageCode={selectedLanguageCode} />
      <LanguageSwitcher
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
