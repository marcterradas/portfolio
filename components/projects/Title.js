import { useCustomTranslations } from "@/infrastructure/components/translations";
import CustomTitle from "@/components/common/Title";

export default function Title() {
  const translations = useCustomTranslations("projects");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
