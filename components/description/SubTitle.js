import { useTranslations } from "next-intl";

export default function SubTitle() {
  const t = useTranslations("main");
  return (
    <h2 className="flex justify-center w-full font-sans text-lg font-normal">
      {t("subtitle")}
    </h2>
  );
}
