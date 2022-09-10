import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("experience");
  return <h3 className="text-xl font-bold lg:text-2xl">{t("title")}</h3>;
}
