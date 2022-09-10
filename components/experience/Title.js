import { useCustomTranslations } from "../../logic/translations";

export default function Title() {
  const translations = useCustomTranslations("experience");
  return (
    <h3 className="mb-2 font-sans text-xl font-bold lg:text-2xl lg:mb-4">
      {translations("title")}
    </h3>
  );
}
