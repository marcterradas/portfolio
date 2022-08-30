import { useTranslations } from "next-intl";

export default function Curriculum() {
  const t = useTranslations("nav");
  return (
    <button className="px-4 mr-4 font-sans text-base font-bold transition-colors duration-300 ease-linear bg-blue-300 rounded-sm h-11 hover:bg-blue-400 lg:text-lg">
      {t("curriculum")}
    </button>
  );
}
