import { useCustomTranslations } from "@/infrastructure/functions/translations";
import CustomTitle from "@/application/common/Title";

export default function Title() {
  const translations = useCustomTranslations("studies");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
