import Image from "next/image";
import Languages from "../../constants/languages.json";

export default function Language({ languageCode }) {
  const language = Languages[languageCode];
  const imgSrc = `/img/${languageCode}.svg`;
  return (
    <div className="flex items-center justify-start p-2 cursor-pointer">
      <div className="relative w-8 h-6">
        <Image
          src={imgSrc}
          alt={languageCode}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="ml-2 font-sans text-base lg:text-lg">{language}</div>
    </div>
  );
}
