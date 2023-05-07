import { getTranslations } from "@/infrastructure/functions/translations";
import { getContactLink } from "@/infrastructure/functions/information";
import ContactButton from "@/application/common/ContactButton";

export default function Email() {
  const translations = getTranslations("footer");
  const name = translations("email");
  const link = getContactLink("email");
  const image = "/img/email.svg";

  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
