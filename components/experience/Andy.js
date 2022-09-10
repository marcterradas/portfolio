import { useCustomTranslations } from "../../logic/translations";

export default function Andy() {
  const translations = useCustomTranslations("experience");

  return (
    <div>
      <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
        {translations("andy.title")}
      </h4>
    </div>
  );
}
