import { getTranslations } from "@/infrastructure/functions/translations";
import {
  getWorkDates,
  getContactLink,
} from "@/infrastructure/functions/information";
import Link from "@/application/common/Link";
import { calculateDifferenceYears } from "@/domain/dates";

export default function AboutMe() {
  const translations = getTranslations("main");
  const [currentDate] = new Date().toISOString().split("T");
  const kirterDates = getWorkDates("kriter");
  const experienceYears = calculateDifferenceYears(
    kirterDates.startDate,
    currentDate
  );
  const linkedinLink = getContactLink("linkedin");
  const githubLink = getContactLink("github");

  return (
    <div className="px-4 mt-8 font-sans text-base font-normal sm:mt-12 sm:text-lg">
      <p>
        {translations.rich("aboutMe.part1", {
          experienceYears: experienceYears,
          bold: (children) => <b>{children}</b>,
        })}
      </p>
      <p>{translations("aboutMe.part2")}</p>
      <p>
        {translations.rich("aboutMe.part3", {
          link1: (children) => (
            <b>
              <Link href={linkedinLink}>{children}</Link>
            </b>
          ),
          link2: (children) => (
            <b>
              <Link href={githubLink}>{children}</Link>
            </b>
          ),
        })}
      </p>
    </div>
  );
}
