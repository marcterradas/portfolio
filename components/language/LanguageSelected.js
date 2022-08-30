import Language from "./Language";

export default function SelectedLanguage({ selectedLanguageCode }) {
  return (
    <div className="h-11 pr-2 pl-1 rounded-md flex justify-center items-center cursor-pointer hover:bg-stone-200 transition-colors ease-linear duration-300">
      <Language languageCode={selectedLanguageCode}></Language>
      <div className="w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
}
