import { useTranslations } from "next-intl";
import { calculateDifferenceYears } from "../../logic/dates";
import Dates from "../../constants/dates.json";

export default function AboutMe() {
  const t = useTranslations("main");
  const [currentDate] = new Date().toISOString().split("T");
  const experienceYears = calculateDifferenceYears(
    Dates.firstJobDate,
    currentDate
  );

  return (
    <div className="mt-8 font-sans text-base font-normal sm:mt-12 sm:text-lg">
      <p>{t("aboutMe.part1")}</p>
      <p>{t("aboutMe.part2", { experienceYears: experienceYears })}</p>
    </div>
  );
}
