import { Disclosure, Transition } from "@headlessui/react";
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
    <Disclosure as="div" defaultOpen="true" className="mb-4">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-center w-full px-4 py-2 text-left transition-colors duration-300 ease-linear rounded-sm bg-stone-200 hover:bg-stone-300 ">
            <div className="w-full">
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
              <p className="font-sans text-sm font-normal sm:text-base">
                {translations("andy.ubication")}
              </p>
            </div>
            <div
              className={`${
                open ? "rotate-180 transform" : ""
              } w-3 h-3 bg-[url('/img/arrow-down.svg')] bg-cover bg-no-repeat bg-center`}
            ></div>
          </Disclosure.Button>
          <Transition
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="px-4 py-3">
              <div className="px-4 py-2 rounded-sm bg-stone-200">
                <div className="mb-4">
                  <h5>{translations("responsibilities")}</h5>
                  <p>{translations("andy.responsibilities.part1")}</p>
                  <p>{translations("andy.responsibilities.part2")}</p>
                  <p>{translations("andy.responsibilities.part3")}</p>
                </div>
                <div>
                  <h5>{translations("objectivesAchieved")}</h5>
                  <p>{translations("andy.objectivesAchieved.part1")}</p>
                  <p>{translations("andy.objectivesAchieved.part2")}</p>
                  <p>{translations("andy.objectivesAchieved.part3")}</p>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
