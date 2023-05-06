import { useCustomTranslations } from "@/infrastructure/functions/translations";
import SectionContainer from "@/controller/common/SectionContainer";
import Subtitle from "@/controller/common/Subtitle";
import Paragraph from "@/controller/common/Paragraph";
import List from "@/controller/common/List";

export default function Ce() {
  const translations = useCustomTranslations("studies");

  const Title = () => {
    return (
      <SectionContainer>
        <Subtitle>{translations("ce.title")}</Subtitle>
        <Paragraph>{translations("ce.place")}</Paragraph>
        <Paragraph>{translations("ce.duration")}</Paragraph>
      </SectionContainer>
    );
  };

  const Description = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <List>
            <li className="">{translations("ce.description")}</li>
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
