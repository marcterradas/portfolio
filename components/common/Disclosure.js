import { Disclosure, Transition } from "@headlessui/react";

export default function CustomDisclosure({ button, content }) {
  return (
    <Disclosure as="div" defaultOpen="true" className="mb-8">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-center w-full px-4 py-2 text-left transition-colors duration-300 ease-linear rounded-sm hover:bg-stone-100 ">
            {button}
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
              <div className="px-4 py-2 rounded-sm ">{content}</div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
