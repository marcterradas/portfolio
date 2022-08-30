import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LanguageSelected from "../language/LanguageSelected";
import LanguageDropDownElements from "../language/LanguageDropDownElements";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="fixed w-full h-11 flex justify-end pr-4">
      <Popover className="relative">
        <Popover.Button>
          <LanguageSelected selectedLanguageCode={selectedLanguageCode} />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10">
            {({ close: closePopover }) => (
              <div className="rounded-md shadow-md grid gap-2">
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
    </nav>
  );
}
