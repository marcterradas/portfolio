import { useCustomTranslations } from "../../logic/translations";
import CustomDisclosure from "../common/Disclosure";
import Link from "next/link";

export default function B2() {
  const translations = useCustomTranslations("studies");

  const Button = () => {
    return (
      <div className="w-full">
        <h4 className="font-sans text-lg font-normal lg:text-xl">
          {translations("b2.title")}
        </h4>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("b2.place")}
        </p>
        <p className="font-sans text-sm font-normal sm:text-base">
          {translations("b2.date")}
        </p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="mb-6">
        <div className="pl-4">
          <ul className="font-sans text-sm font-normal list-disc sm:text-base">
            <li>
              <Link href="/documents/b2.pdf" locale={false} passHref>
                <a
                  target="_blank"
                  className="font-bold underline"
                  title={translations("b2.title")}
                >
                  {translations("b2.description")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return <CustomDisclosure button={<Button />} content={<Content />} />;
}
