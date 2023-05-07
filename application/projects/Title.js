import { getTranslations } from "@/infrastructure/functions/translations";
import CustomTitle from "@/application/common/Title";

export default function Title() {
  const translations = getTranslations("projects");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
