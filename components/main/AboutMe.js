import Link from "next/link";
import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYears } from "../../logic/dates";
import Dates from "../../constants/dates.json";
import contactLinks from "../../constants/contactLinks.json";

export default function AboutMe() {
  const translations = useCustomTranslations("main");
  const [currentDate] = new Date().toISOString().split("T");
  const experienceYears = calculateDifferenceYears(
    Dates.kriter.startDate,
    currentDate
  );

  return (
    <div className="px-4 mt-8 font-sans text-base font-normal sm:mt-12 sm:text-lg">
      <p>{translations("aboutMe.part1")}</p>
      <p>
        {translations.rich("aboutMe.part2", {
          experienceYears: experienceYears,
          bold: (children) => <b>{children}</b>,
        })}
      </p>
      <p>{translations("aboutMe.part3")}</p>
      <p>
        {translations.rich("aboutMe.part4", {
          link1: (children) => (
            <Link
              href={contactLinks.linkedin}
              locale={false}
              target="_blank"
              title={children}
              className="underline"
            >
              {children}
            </Link>
          ),
          link2: (children) => (
            <Link
              href={contactLinks.github}
              locale={false}
              target="_blank"
              title={children}
              className="underline"
            >
              {children}
            </Link>
          ),
        })}
      </p>
    </div>
  );
}
