import { useCustomTranslations } from "../../logic/translations";
import Dates from "../../constants/dates.json";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";

export default function Andy() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.andy;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  return (
    <div className="mb-8">
      <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
        {translations("andy.title")}
      </h4>
      <p className="font-sans text-base font-normal sm:text-lg">
        {translations.rich("andy.duration", {
          years,
          months,
          bold: (children) => <b>{children}</b>,
        })}
      </p>
    </div>
  );
}
