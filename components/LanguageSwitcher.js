import { useRouter } from "next/router";
import Link from "next/link";

import Language from "./Language";

export default function LanguageSwitcher() {
  const { locales } = useRouter();
  const langaugesComponents = locales.map((languageCode) => (
    <Link key={languageCode} href={languageCode} locale={languageCode}>
      <a>
        <Language languageCode={languageCode}></Language>
      </a>
    </Link>
  ));
  return <div>{langaugesComponents}</div>;
}
