import { useCustomTranslations } from "../../logic/translations";
import Link from "next/link";
import Documents from "../../constants/documents.json";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/SubTitle";

export default function Daw() {
  const translations = useCustomTranslations("studies");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("daw.title")}</Subtitle>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("daw.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("daw.duration")}
        </p>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li className="mb-1">
              <Link
                href={Documents.daw}
                locale={false}
                target="_blank"
                className="font-bold underline"
                title={translations("daw.title")}
              >
                {translations("daw.description.part1")}
              </Link>
            </li>
            <li className="">{translations("daw.description.part2")}</li>
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
