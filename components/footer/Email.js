import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";
import contactLinks from "../../constants/contactLinks.json";

export default function Email() {
  const translations = useCustomTranslations("footer");
  const name = translations("email");
  const link = contactLinks.email;
  return (
    <div>
      <ContactButton />
    </div>
  );
}
