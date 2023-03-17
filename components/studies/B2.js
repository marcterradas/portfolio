import { useCustomTranslations } from "../../logic/translations";
import Link from "next/link";
import Documents from "../../constants/documents.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/Subtitle";
import Paragraph from "../common/Paragraph";
import List from "../common/List";

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
              <Link
                href={Documents.b2}
                locale={false}
                target="_blank"
                className="font-bold underline"
                title={translations("b2.title")}
              >
                {translations("b2.description")}
              </Link>
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
