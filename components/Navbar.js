import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="flex justify-end pr-2">
      <LanguageSwitcher />
    </nav>
  );
}
