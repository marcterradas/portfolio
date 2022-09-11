import { Disclosure, Transition } from "@headlessui/react";
import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";

export default function Kriter() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.kriter;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  return (
    <Disclosure defaultOpen="true" className="mb-8">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full bg-red-200">
            <h4 className="font-sans text-lg font-normal lg:text-xl lg:mt-2">
              {translations("kriter.title")}
            </h4>
            <p className="font-sans text-base font-normal sm:text-lg">
              {translations.rich("kriter.duration", {
                years,
                months,
                bold: (children) => <b>{children}</b>,
              })}
            </p>
            <p className="font-sans text-base font-normal sm:text-lg">
              {translations("kriter.ubication")}
            </p>
            <div
              className={`${
                open ? "rotate-180 transform" : ""
              } w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center`}
            ></div>
          </Disclosure.Button>
        </>
      )}
    </Disclosure>
  );
}
