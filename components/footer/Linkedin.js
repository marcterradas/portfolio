import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";

export default function Linkedin() {
  const translations = useCustomTranslations("footer");
  const name = translations("linkedin");
  return (
    <div>
      <ContactButton />
    </div>
  );
}
