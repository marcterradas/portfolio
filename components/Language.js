import Link from "next/link";
import Image from "next/image";
import Languages from "../constants/languages.json";

export default function Language({ languageCode }) {
  const language = Languages[languageCode];
  const imgSrc = `/img/${languageCode}.svg`;
  return (
    <div>
      <div className="bg-black w-8 h-6 relative">
        <Image
          src={imgSrc}
          alt={languageCode}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <Link href={languageCode} locale={languageCode}>
        {language}
      </Link>
    </div>
  );
}
