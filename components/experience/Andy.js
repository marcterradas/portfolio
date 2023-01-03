import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";
import CustomDisclosure from "../common/Disclosure";
import Link from "next/link";
import Projects from "../../constants/projectsLinks.json";

export default function Andy() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.andy;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  const Button = () => {
    return (
      <div className="w-full">
        <h4 className="font-sans text-lg font-normal lg:text-xl">
          {translations("andy.title")}
        </h4>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations.rich("andy.duration", {
            years,
            months,
            bold: (children) => <b>{children}</b>,
          })}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("andy.ubication")}
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
                {translations("andy.responsibilities.part1")}
              </li>
              <li className="mb-1">
                {translations("andy.responsibilities.part2")}
              </li>
              <li className="mb-1">
                {translations("andy.responsibilities.part3")}
              </li>
              <li className="mb-1">
                {translations("andy.responsibilities.part4")}
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
                {translations("andy.objectivesAchieved.part1")}
              </li>
              <li className="mb-1">
                {translations.rich("andy.objectivesAchieved.part2", {
                  link: (children) => (
                    <Link
                      href={Projects.autofactura}
                      locale={false}
                      title={children}
                      className="underline"
                      target="_blank"
                    >
                      {children}
                    </Link>
                  ),
                })}
              </li>
              <li className="mb-1">
                {translations("andy.objectivesAchieved.part3")}
              </li>
              <li className="mb-1">
                {translations("andy.objectivesAchieved.part4")}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
