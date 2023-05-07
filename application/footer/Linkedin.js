import { getTranslations } from "@/infrastructure/functions/translations";
import { getContactLink } from "@/infrastructure/functions/information";
import ContactButton from "@/application/common/ContactButton";

export default function Linkedin() {
  const translations = getTranslations("footer");
  const name = translations("linkedin");
  const link = getContactLink("linkedin");
  const image = "/img/linkedin.svg";
  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
