import { useRouter } from "next/router";
import Link from "next/link";

import Language from "./Language";

export default function LanguageSwitcher() {
  const { locale, locales } = useRouter();

  const selectedLanguage = (
    <div className="pr-2 pl-1 flex justify-center items-center cursor-pointer hover:bg-stone-100 transition-colors ease-linear duration-500">
      <Language languageCode={locale}></Language>
      <div className="w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center"></div>
    </div>
  );

  const dropDown = locales.map((languageCode) => (
    <Link key={languageCode} href={languageCode} locale={languageCode}>
      <a>
        <Language languageCode={languageCode}></Language>
      </a>
    </Link>
  ));
  return (
    <>
      <div>{selectedLanguage}</div>
      {/* <div>{dropDown}</div> */}
    </>
  );
}
