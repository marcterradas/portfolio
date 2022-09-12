import { useCustomTranslations } from "../../logic/translations";
import CustomDisclosure from "../common/Disclosure";

export default function Ce() {
  const translations = useCustomTranslations("studies");

  const Button = () => {
    return (
      <div className="w-full">
        <h4 className="font-sans text-lg font-normal lg:text-xl">
          {translations("ce.title")}
        </h4>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("ce.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("ce.duration")}
        </p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li className="">{translations("ce.description")}</li>
          </ul>
        </div>
      </div>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
