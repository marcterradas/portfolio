import { useCustomTranslations } from "@/infrastructure/components/translations";
import { calculateDifferenceYears } from "@/application/dates";
import Dates from "@/constants/dates.json";
import contactLinks from "@/constants/contactLinks.json";
import Link from "@/components/common/Link";

export default function AboutMe() {
  const translations = useCustomTranslations("main");
  const [currentDate] = new Date().toISOString().split("T");
  const experienceYears = calculateDifferenceYears(
    Dates.kriter.startDate,
    currentDate
  );

  return (
    <div className="px-4 mt-8 font-sans text-base font-normal sm:mt-12 sm:text-lg">
      <p>
        {translations.rich("aboutMe.part1", {
          experienceYears: experienceYears,
          bold: (children) => <b>{children}</b>,
        })}
      </p>
      <p>{translations("aboutMe.part2")}</p>
      <p>{translations("aboutMe.part3")}</p>
      <p>
        {translations.rich("aboutMe.part4", {
          link1: (children) => (
            <b>
              <Link href={contactLinks.linkedin}>{children}</Link>
            </b>
          ),
          link2: (children) => (
            <b>
              <Link href={contactLinks.github}>{children}</Link>
            </b>
          ),
        })}
      </p>
    </div>
  );
}
