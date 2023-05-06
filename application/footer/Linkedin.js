import { useCustomTranslations } from "@/infrastructure/functions/translations";
import ContactButton from "@/application/common/ContactButton";
import contactLinks from "@/constants/contactLinks.json";

export default function Linkedin() {
  const translations = useCustomTranslations("footer");
  const name = translations("linkedin");
  const link = contactLinks.linkedin;
  const image = "/img/linkedin.svg";
  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
