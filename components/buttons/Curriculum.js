import { useTranslations } from "next-intl";

export default function Curriculum() {
  const t = useTranslations("nav");
  return (
    <button className="h-11 bg-blue-300 px-4 mr-4 rounded-sm text-lg font-sans font-bold hover:bg-blue-400 transition-colors ease-linear duration-300">
      {t("curriculum")}
    </button>
  );
}
