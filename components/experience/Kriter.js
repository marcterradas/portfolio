import { useCustomTranslations } from "../../logic/translations";

export default function Kriter() {
  const translations = useCustomTranslations("experience");

  return (
    <div>
      <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
        {translations("kriter.title")}
      </h4>
    </div>
  );
}
