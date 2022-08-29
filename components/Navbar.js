import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import SelectedLanguage from "./SelectedLanguage";
import LanguageDropDown from "./LanguageDropDown";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = useRouter();

  return (
    <nav className="flex justify-end pr-2">
      <Popover className="relative">
        <Popover.Button>
          <SelectedLanguage selectedLanguageCode={selectedLanguageCode} />
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
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative">
                <LanguageDropDown
                  selectedLanguageCode={selectedLanguageCode}
                  languagesCodes={languagesCodes}
                />
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
}
