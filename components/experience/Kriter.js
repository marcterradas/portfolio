import { useCustomTranslations } from "../../logic/translations";
import Dates from "../../constants/dates.json";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";

export default function Kriter() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.kriter;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  return (
    <div>
      <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
        {translations("kriter.title")}
      </h4>
      <p className="font-sans text-base font-normal sm:text-lg">
        {translations.rich("kriter.duration", {
          years,
          months,
          bold: (children) => <b>{children}</b>,
        })}
      </p>
    </div>
  );
}
