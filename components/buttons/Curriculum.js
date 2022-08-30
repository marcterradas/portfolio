import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Curriculum() {
  const t = useTranslations("nav");
  return (
    <button className="px-4 mr-4 transition-colors duration-300 ease-linear bg-blue-300 rounded-sm h-11 hover:bg-blue-400 sm:text-lg">
      <div className="flex items-center justify-start cursor-pointer">
        <div className="w-4 h-4 mr-3 bg-[url('/img/download.svg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="font-sans text-base font-bold sm:text-lg">
          {t("curriculum")}
        </div>
      </div>
    </button>
  );
}
