import { getTranslations } from "@/infrastructure/functions/translations";
import { getContactLink } from "@/infrastructure/functions/information";
import ContactButton from "@/application/common/ContactButton";

export default function Github() {
  const translations = getTranslations("footer");
  const name = translations("github");
  const link = getContactLink("github");
  const image = "/img/github.svg";
  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
