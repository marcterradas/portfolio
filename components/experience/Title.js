import { useCustomTranslations } from "../../logic/translations";
import CustomTitle from "../common/Title";

export default function Title() {
  const translations = useCustomTranslations("experience");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}
