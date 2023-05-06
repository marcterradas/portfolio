import { useCustomTranslations } from "@/infrastructure/components/translations";
import ContactButton from "@/components/common/ContactButton";
import contactLinks from "@/constants/contactLinks.json";

export default function Github() {
  const translations = useCustomTranslations("footer");
  const name = translations("github");
  const link = contactLinks.github;
  const image = "/img/github.svg";
  return (
    <div>
      <ContactButton name={name} link={link} image={image} />
    </div>
  );
}
