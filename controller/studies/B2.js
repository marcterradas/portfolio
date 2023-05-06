import { useCustomTranslations } from "@/infrastructure/functions/translations";
import Documents from "@/constants/documents.json";
import SectionContainer from "@/controller/common/SectionContainer";
import Subtitle from "@/controller/common/Subtitle";
import Paragraph from "@/controller/common/Paragraph";
import List from "@/controller/common/List";
import Link from "@/controller/common/Link";

export default function B2() {
  const translations = useCustomTranslations("studies");

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
                <Link href={Documents.b2} title={translations("b2.title")}>
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
