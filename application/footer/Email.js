import { getTranslations } from "@/infrastructure/functions/translations";
import ContactButton from "@/application/common/ContactButton";
import contactLinks from "@/constants/contactLinks.json";

export default function Email() {
  const translations = getTranslations("footer");
  const name = translations("email");
  const link = contactLinks.email;
  const image = "/img/email.svg";

  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
