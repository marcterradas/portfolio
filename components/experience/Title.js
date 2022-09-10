import { useCustomTranslations } from "../../logic/translations";

export default function Title() {
  const translations = useCustomTranslations("experience");
  return (
    <h3 className="font-sans text-xl font-bold lg:text-2xl">
      {translations("title")}
    </h3>
  );
}
