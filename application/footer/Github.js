import { getTranslations } from "@/infrastructure/functions/translations";
import ContactButton from "@/application/common/ContactButton";
import contactLinks from "@/constants/contactLinks.json";

export default function Github() {
  const translations = getTranslations("footer");
  const name = translations("github");
  const link = contactLinks.github;
  const image = "/img/github.svg";
  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}