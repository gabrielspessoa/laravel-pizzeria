import { Fragment, useState } from "react";
import { Listbox as HLListbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

export function Listbox({ options, selected, setSelected }: any) {
    return (
        <HLListbox value={selected} onChange={setSelected}>
            <div className="relative">
                <HLListbox.Button className="relative w-full px-3 py-2 text-sm transition duration-200 border border-gray-300 rounded-md text-start hover:border-yellow-400 focus:border-yellow-500 ring-0 ring-gray-400 focus:ring-2 focus:ring-yellow-500/30 focus:outline-none">
                    {selected.name}
                    <FontAwesomeIcon
                        className="absolute text-gray-600 -translate-y-1/2 right-3 top-1/2"
                        icon={faCaretDown}
                    />
                </HLListbox.Button>
                <Transition
                    as={Fragment}
                    enter="transition duration-200 ease"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-200 ease"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <HLListbox.Options className="absolute w-full py-3 mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-md max-h-60">
                        {options.map((option: any) => (
                            <HLListbox.Option
                                key={option.id}
                                className={({ active, selected }) =>
                                    twMerge([
                                        "relative py-2 pl-10 pr-4 select-none cursor-pointer",
                                        active
                                            ? "bg-yellow-100 text-yellow-900"
                                            : "text-gray-900",
                                        selected && "font-bold",
                                    ])
                                }
                                value={option}
                            >
                                {option.name}
                            </HLListbox.Option>
                        ))}
                    </HLListbox.Options>
                </Transition>
            </div>
        </HLListbox>
    );
}
