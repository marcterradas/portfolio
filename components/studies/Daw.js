import { useCustomTranslations } from "../../logic/translations";
import Documents from "../../constants/documents.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";
import List from "../common/List";
import Link from "../common/Link";

export default function Daw() {
  const translations = useCustomTranslations("studies");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("daw.title")}</Subtitle>
        <Paragraph>{translations("daw.place")}</Paragraph>
        <Paragraph>{translations("daw.duration")}</Paragraph>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <List>
            <li className="mb-1">
              <b>
                <Link href={Documents.daw} title={translations("daw.title")}>
                  {translations("daw.description.part1")}
                </Link>
              </b>
            </li>
            <li>{translations("daw.description.part2")}</li>
          </List>
        </div>
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
