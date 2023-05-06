import { useCustomTranslations } from "@/infrastructure/components/translations";
import CustomTitle from "@/components/common/Title";

export default function Title() {
  const translations = useCustomTranslations("experience");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
