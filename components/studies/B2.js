import { useCustomTranslations } from "../../logic/translations";
import Link from "next/link";
import Documents from "../../constants/documents.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/SubTitle";

export default function B2() {
  const translations = useCustomTranslations("studies");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("b2.title")}</Subtitle>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("b2.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("b2.date")}
        </p>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
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
          </ul>
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
