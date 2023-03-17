import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";
import Link from "next/link";
import Projects from "../../constants/projectsLinks.json";
import SectionContainer from "../common/SectionContainer";

export default function Kriter() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.kriter;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  const Title = () => {
    return (
      <SectionContainer>
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
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="pl-4">
        <ul className="font-sans text-sm font-normal list-disc sm:text-base">
          <li className="mb-1">
            {translations.rich("kriter.description.part1", {
              link: (children) => (
                <Link
                  href={Projects.gallissa}
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
          <li className="mb-1">{translations("kriter.description.part2")}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <Title />
      <Description />
    </div>
  );
}
