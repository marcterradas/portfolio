import Image from "next/image";
import Languages from "../constants/languages.json";

export default function Language({ languageCode }) {
  const language = Languages[languageCode];
  const imgSrc = `/img/${languageCode}.svg`;
  return (
    <div className="cursor-pointer flex items-center justify-start p-2">
      <div className="w-8 h-6 relative">
        <Image
          src={imgSrc}
          alt={languageCode}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="ml-2 text-lg font-sans">{language}</div>
    </div>
  );
}
