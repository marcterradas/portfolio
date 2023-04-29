import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LanguageSelected from "@/components/navbar/LanguageSelected";
import LanguageDropDownElements from "@/components/navbar/LanguageDropDownElements";

export default function LanguageDropDown({
  selectedLanguageCode,
  languagesCodes,
}) {
  return (
    <Popover className="relative w-36">
      <Popover.Button>
        <LanguageSelected selectedLanguageCode={selectedLanguageCode} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10">
          {({ close: closePopover }) => (
            <div className="grid gap-2 rounded-sm shadow-md">
              <LanguageDropDownElements
                selectedLanguageCode={selectedLanguageCode}
                languagesCodes={languagesCodes}
                closePopover={closePopover}
              />
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
