import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";
import contactLinks from "../../constants/contactLinks.json";

export default function Linkedin() {
  const translations = useCustomTranslations("footer");
  const name = translations("linkedin");
  const link = contactLinks.linkedin;
  return (
    <div>
      <ContactButton />
    </div>
  );
}
