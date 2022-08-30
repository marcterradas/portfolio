import Language from "./Language";

export default function SelectedLanguage({ selectedLanguageCode }) {
  return (
    <div className="flex items-center justify-center pl-1 pr-2 transition-colors duration-300 ease-linear rounded-md cursor-pointer h-11 hover:bg-stone-200">
      <Language languageCode={selectedLanguageCode}></Language>
      <div className="w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
}
