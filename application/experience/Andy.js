import { getTranslations } from "@/infrastructure/functions/translations";
import {
  getProjectLink,
  getWorkDates,
} from "@/infrastructure/functions/information";
import SectionContainer from "@/application/common/SectionContainer";
import Subtitle from "@/application/common/Subtitle";
import Paragraph from "@/application/common/Paragraph";
import List from "@/application/common/List";
import Link from "@/application/common/Link";
import { calculateDifferenceYearsAndMonths } from "@/domain/dates";

export default function Andy() {
  const translations = getTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = getWorkDates("andy");
  const projectLink = getProjectLink("autofactura");

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("andy.title")}</Subtitle>
        <Paragraph>
          {translations.rich("andy.duration", {
            years,
            months,
            bold: (children) => <b>{children}</b>,
          })}
        </Paragraph>
        <Paragraph>{translations("andy.ubication")}</Paragraph>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="pl-4">
        <List>
          <li className="mb-1">
            {translations.rich("andy.description.part1", {
              link: (children) => <Link href={projectLink}>{children}</Link>,
            })}
          </li>
          <li className="mb-1">{translations("andy.description.part2")}</li>
          <li className="mb-1">{translations("andy.description.part3")}</li>
          <li className="mb-1">{translations("andy.description.part4")}</li>
          <li className="mb-1">{translations("andy.description.part5")}</li>
          <li className="mb-1">{translations("andy.description.part6")}</li>
          <li className="mb-1">{translations("andy.description.part7")}</li>
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
