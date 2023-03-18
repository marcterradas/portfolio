import { useCustomTranslations } from "../../logic/translations";
import CustomTitle from "../common/Title";

export default function Title() {
  const translations = useCustomTranslations("projects");
  return <CustomTitle>{translations("title")}</CustomTitle>;
}