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
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li className="mb-1">
              {translations.rich("andy.description.part1", {
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
            <li className="mb-1">{translations("andy.description.part2")}</li>
            <li className="mb-1">{translations("andy.description.part3")}</li>
            <li className="mb-1">{translations("andy.description.part4")}</li>
          </ul>
        </div>
      </>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
