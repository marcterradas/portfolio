import { useCustomTranslations } from "../../logic/translations";
import Dates from "../../constants/dates.json";

export default function Andy() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.andy;

  if (!endDate) endDate = currentDate;

  return (
    <div>
      <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
        {translations("andy.title")}
      </h4>
      <p className="font-sans text-base font-normal sm:text-lg">
        {translations("andy.duration")}
      </p>
    </div>
  );
}
