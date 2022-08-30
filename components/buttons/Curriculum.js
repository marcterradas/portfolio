import { useTranslations } from "next-intl";

export default function Curriculum() {
  const t = useTranslations("nav");
  return <div>{t("curriculum")}</div>;
}
