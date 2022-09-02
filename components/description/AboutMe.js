import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("main");

  return (
    <div>
      <p>{t("aboutMe.part1")}</p>
      <p>{t("aboutMe.part2", { experienceYears: 4 })}</p>
    </div>
  );
}
