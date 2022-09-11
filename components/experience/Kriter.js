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
          <Disclosure.Button className="flex items-center justify-center w-full px-4 py-2 text-left transition-colors duration-300 ease-linear rounded-sm bg-stone-100 hover:bg-stone-200 ">
            <div className="w-full">
              <h4 className="font-sans text-lg font-normal lg:text-xl">
                {translations("kriter.title")}
              </h4>
              <p className="font-sans text-base font-normal sm:text-lg">
                {translations.rich("kriter.duration", {
                  years,
                  months,
                  bold: (children) => <b>{children}</b>,
                })}
              </p>
              <p className="font-sans text-sm font-normal sm:text-base">
                {translations("kriter.ubication")}
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
            <Disclosure.Panel className="px-2 py-3">
              <div className="px-4 py-2 rounded-sm bg-stone-100">
                <div className="mb-6">
                  <h5 className="mb-1 font-sans text-base font-normal underline sm:text-lg">
                    {translations("responsibilities")}
                  </h5>
                  <div className="pl-4">
                    <ul className="font-sans text-sm font-normal list-disc sm:text-base">
                      <li className="mb-1">
                        {translations("kriter.responsibilities.part1")}
                      </li>
                      <li className="mb-1">
                        {translations("kriter.responsibilities.part2")}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="mb-1 font-sans text-base font-normal underline sm:text-lg">
                    {translations("objectivesAchieved")}
                  </h5>
                  <div className="pl-4">
                    <ul className="font-sans text-sm font-normal list-disc sm:text-base">
                      <li className="mb-1">
                        {translations("kriter.objectivesAchieved.part1")}
                      </li>
                      <li className="mb-1">
                        {translations("kriter.objectivesAchieved.part2")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
