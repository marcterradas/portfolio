import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";
import contactLinks from "../../constants/contactLinks.json";

export default function Github() {
  const translations = useCustomTranslations("footer");
  const name = translations("github");
  const link = contactLinks.github;
  return (
    <div>
      <ContactButton />
    </div>
  );
}
