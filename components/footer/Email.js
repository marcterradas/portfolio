import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";

export default function Email() {
  const translations = useCustomTranslations("footer");
  const name = translations("email");
  return (
    <div>
      <ContactButton />
    </div>
  );
}
