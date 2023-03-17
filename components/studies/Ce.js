import { useCustomTranslations } from "../../logic/translations";
import SectionContainer from "../common/SectionContainer";
import Subtitle from "../common/SubTitle";

export default function Ce() {
  const translations = useCustomTranslations("studies");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("ce.title")}</Subtitle>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("ce.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("ce.duration")}
        </p>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li className="">{translations("ce.description")}</li>
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
