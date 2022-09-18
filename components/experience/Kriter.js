import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";
import CustomDisclosure from "../common/Disclosure";
import Link from "next/link";
import Projects from "../../constants/projectsLinks.json";

export default function Kriter() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.kriter;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  const Button = () => {
    return (
      <div className="w-full">
        <h4 className="font-sans text-lg font-normal lg:text-xl">
          {translations("kriter.title")}
        </h4>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations.rich("kriter.duration", {
            years,
            months,
            bold: (children) => <b>{children}</b>,
          })}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("kriter.ubication")}
        </p>
      </div>
    );
  };

  const Content = () => {
    return (
      <>
        <div className="mb-6">
          <h5 className="mb-1 font-sans text-base font-normal underline sm:text-lg">
            {translations("responsibilities")}
          </h5>
          <div className="pl-4">
            <ul className="font-sans text-sm font-normal list-disc sm:text-base">
              <li className="mb-1">
                {translations("kriter.responsibilities.part1")}
              </li>
              <li className="mb-1">
                {translations("kriter.responsibilities.part2")}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="mb-1 font-sans text-base font-normal underline sm:text-lg">
            {translations("objectivesAchieved")}
          </h5>
          <div className="pl-4">
            <ul className="font-sans text-sm font-normal list-disc sm:text-base">
              <li className="mb-1">
                {translations.rich("kriter.objectivesAchieved.part1", {
                  link: (children) => (
                    <Link href={Projects.gallissa} locale={false} passHref>
                      <a target="_blank" title={children} className="underline">
                        {children}
                      </a>
                    </Link>
                  ),
                })}
              </li>
              <li className="mb-1">
                {translations("kriter.objectivesAchieved.part2")}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
