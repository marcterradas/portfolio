import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("experience");
  return <h3>{t("title")}</h3>;
}
