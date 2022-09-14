import { useCustomTranslations } from "../../logic/translations";
import ContactButton from "../common/ContactButton";

export default function Github() {
  const translations = useCustomTranslations("footer");
  const name = translations("github");
  return (
    <div>
      <ContactButton />
    </div>
  );
}
