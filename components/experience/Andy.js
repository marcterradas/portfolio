import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";
import Projects from "../../constants/projectsLinks.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";
import List from "../common/List";
import Link from "../common/Link";

export default function Andy() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.andy;

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
              link: (children) => (
                <Link href={Projects.autofactura}>{children}</Link>
              ),
            })}
          </li>
          <li className="mb-1">{translations("andy.description.part2")}</li>
          <li className="mb-1">{translations("andy.description.part3")}</li>
          <li className="mb-1">{translations("andy.description.part4")}</li>
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
