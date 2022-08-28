import Link from "next/link";
import Languages from "../constants/languages.json";

export default function Language({ languageCode }) {
  const language = Languages[languageCode];
  return (
    <Link href={languageCode} locale={languageCode}>
      {language}
    </Link>
  );
}
