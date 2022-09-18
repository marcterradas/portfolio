import { useCustomTranslations } from "../../logic/translations";
import CustomDisclosure from "../common/Disclosure";
import Link from "next/link";
import Documents from "../../constants/documents.json";

export default function Daw() {
  const translations = useCustomTranslations("studies");

  const Button = () => {
    return (
      <div className="w-full">
        <h4 className="font-sans text-lg font-normal lg:text-xl">
          {translations("daw.title")}
        </h4>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("daw.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("daw.duration")}
        </p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li className="mb-1">
              <Link href={Documents.daw} locale={false} passHref>
                <a
                  target="_blank"
                  className="font-bold underline"
                  title={translations("daw.title")}
                >
                  {translations("daw.description.part1")}
                </a>
              </Link>
            </li>
            <li className="">{translations("daw.description.part2")}</li>
          </ul>
        </div>
      </div>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
