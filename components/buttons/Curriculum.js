import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Curriculum() {
  const t = useTranslations("nav");
  return (
    <Link href="/documents/marcterradas.pdf" locale={false} passHref>
      <a
        target="_blank"
        donwload
        className="flex justify-center px-4 mr-4 transition-colors duration-300 ease-linear bg-blue-300 rounded-sm h-11 hover:bg-blue-400 sm:text-lg"
      >
        <div className="flex items-center justify-start cursor-pointer">
          <div className="w-4 h-4 mr-3 bg-[url('/img/download.svg')] bg-cover bg-no-repeat bg-center"></div>
          <div className="font-sans text-base font-bold sm:text-lg">
            {t("curriculum")}
          </div>
        </div>
      </a>
    </Link>
  );
}
