import { getTranslations } from "@/infrastructure/functions/translations";
import { getDocumentLink } from "@/infrastructure/functions/information";
import SectionContainer from "@/application/common/SectionContainer";
import Subtitle from "@/application/common/Subtitle";
import Paragraph from "@/application/common/Paragraph";
import List from "@/application/common/List";
import Link from "@/application/common/Link";

export default function Daw() {
  const translations = getTranslations("studies");
  const dawLink = getDocumentLink("daw");

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
                <Link href={dawLink} title={translations("daw.title")}>
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
