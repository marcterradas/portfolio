import { getTranslations } from "@/infrastructure/functions/translations";
import Link from "@/infrastructure/components/Link";
import Documents from "@/constants/documents.json";

export default function Curriculum() {
  const transitions = getTranslations("nav");
  return (
    <Link
      href={Documents.cv}
      locale={false}
      target="_blank"
      title={transitions("curriculum")}
      className="flex justify-center px-4 mr-4 transition-colors duration-300 ease-linear rounded-sm h-11 hover:bg-stone-300 sm:text-lg bg-stone-200"
      download={true}
    >
      <div className="flex items-center justify-start cursor-pointer">
        <div className="w-4 h-4 mr-3 bg-[url('/img/download.svg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="font-sans text-base font-normal sm:text-lg">
          {transitions("curriculum")}
        </div>
      </div>
    </Link>
  );
}
