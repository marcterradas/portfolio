import { useCustomTranslations } from "@/infrastructure/functions/translations";
import CustomTitle from "@/controller/common/Title";

export default function Title() {
  const translations = useCustomTranslations("projects");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
