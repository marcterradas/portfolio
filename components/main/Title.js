import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("main");
  return (
    <h1 className="flex justify-center w-full font-sans text-3xl font-bold lg:text-5xl">
      {t("title")}
    </h1>
  );
}
