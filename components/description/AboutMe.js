import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("main");

  return (
    <div className="pl-4 pr-2 mt-8 font-sans text-base font-normal sm:mt-12 sm:text-lg sm:px-0">
      <p>{t("aboutMe.part1")}</p>
      <p>{t("aboutMe.part2", { experienceYears: 4 })}</p>
    </div>
  );
}
