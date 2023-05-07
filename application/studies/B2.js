import { getTranslations } from "@/infrastructure/functions/translations";
import { getDocumentLink } from "@/infrastructure/functions/information";
import SectionContainer from "@/application/common/SectionContainer";
import Subtitle from "@/application/common/Subtitle";
import Paragraph from "@/application/common/Paragraph";
import List from "@/application/common/List";
import Link from "@/application/common/Link";

export default function B2() {
  const translations = getTranslations("studies");
  const b2Link = getDocumentLink("b2");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("b2.title")}</Subtitle>
        <Paragraph>{translations("b2.place")}</Paragraph>
        <Paragraph>{translations("b2.date")}</Paragraph>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <List>
            <li>
              <b>
                <Link href={b2Link} title={translations("b2.title")}>
                  {translations("b2.description")}
                </Link>
              </b>
            </li>
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
