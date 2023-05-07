import { getTranslations } from "@/infrastructure/functions/translations";
import { calculateDifferenceYearsAndMonths } from "@/domain/dates";
import Dates from "@/constants/dates.json";
import Projects from "@/constants/projectsLinks.json";
import SectionContainer from "@/application/common/SectionContainer";
import Subtitle from "@/application/common/Subtitle";
import Paragraph from "@/application/common/Paragraph";
import List from "@/application/common/List";
import Link from "@/application/common/Link";

export default function Kriter() {
  const translations = getTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.kriter;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("kriter.title")}</Subtitle>
        <Paragraph>
          {translations.rich("kriter.duration", {
            years,
            months,
            bold: (children) => <b>{children}</b>,
          })}
        </Paragraph>
        <Paragraph>{translations("kriter.ubication")}</Paragraph>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="pl-4">
        <List>
          <li className="mb-1">
            {translations.rich("kriter.description.part1", {
              link: (children) => (
                <Link href={Projects.gallissa}>{children}</Link>
              ),
            })}
          </li>
          <li className="mb-1">{translations("kriter.description.part2")}</li>
        </List>
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
