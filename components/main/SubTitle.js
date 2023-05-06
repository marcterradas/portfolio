import { useCustomTranslations } from "@/infrastructure/functions/translations";

export default function SubTitle() {
  const translations = useCustomTranslations("main");
  return (
    <h2 className="flex justify-center w-full font-sans text-lg font-normal lg:text-2xl lg:mt-2">
      {translations("subtitle")}
    </h2>
  );
}
