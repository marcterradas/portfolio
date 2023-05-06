import { useCustomTranslations } from "@/infrastructure/functions/translations";
import CustomTitle from "@/components/common/Title";

export default function Title() {
  const translations = useCustomTranslations("skills");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
