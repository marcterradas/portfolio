import { getTranslations } from "@/infrastructure/functions/translations";
import CustomTitle from "@/application/common/Title";

export default function Title() {
  const translations = getTranslations("studies");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
