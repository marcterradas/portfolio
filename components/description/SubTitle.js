import { useTranslations } from "next-intl";

export default function SubTitle() {
  const t = useTranslations("main");
  return <h2>{t("subtitle")}</h2>;
}
