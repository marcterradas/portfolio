import { getTranslations } from "@/infrastructure/functions/translations";

export default function Title() {
  const translations = getTranslations("main");
  return (
    <h1 className="flex justify-center w-full font-sans text-3xl font-bold lg:text-5xl">
      {translations("title")}
    </h1>
  );
}
