import { Disclosure } from "@headlessui/react";
import { useCustomTranslations } from "../../logic/translations";
import { calculateDifferenceYearsAndMonths } from "../../logic/dates";
import Dates from "../../constants/dates.json";

export default function Andy() {
  const translations = useCustomTranslations("experience");
  const [currentDate] = new Date().toISOString().split("T");
  let { startDate, endDate } = Dates.andy;

  endDate = endDate || currentDate;

  const [years, months] = calculateDifferenceYearsAndMonths(startDate, endDate);

  return (
    <Disclosure defaultOpen="true" className="mb-8">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full text-left bg-purple-100 hover:bg-purple-200">
            <h4 className="font-sans text-lg font-normal lg:text-xl">
              {translations("andy.title")}
            </h4>
            <p className="font-sans text-base font-normal sm:text-lg">
              {translations.rich("andy.duration", {
                years,
                months,
                bold: (children) => <b>{children}</b>,
              })}
            </p>
            <p className="font-sans text-base font-normal sm:text-lg">
              {translations("andy.ubication")}
            </p>
            <div
              className={`${
                open ? "rotate-180 transform" : ""
              } w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center`}
            ></div>
          </Disclosure.Button>
          <Disclosure.Panel className="">
            <div>
              <h5>{translations("responsibilities")}</h5>
              <p>{translations("andy.responsibilities.part1")}</p>
              <p>{translations("andy.responsibilities.part2")}</p>
              <p>{translations("andy.responsibilities.part3")}</p>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
