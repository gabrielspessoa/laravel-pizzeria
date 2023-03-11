import { Fragment, useState } from "react";
import { Listbox as HLListbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

export function Listbox({ options, selected, setSelected }: any) {
    return (
        <HLListbox value={selected} onChange={setSelected}>
            <div className="relative">
                <HLListbox.Button className="h-11 relative px-3 w-full text-start border-2 border-slate-300 hover:border-slate-400 focus:border-yellow-500 ring-0 ring-slate-400 focus:ring-1 focus:ring-yellow-500 rounded-md transition duration-200 focus:outline-none">
                    {selected.name}
                    <FontAwesomeIcon
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
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
                    <HLListbox.Options className="absolute mt-1 max-h-60 overflow-auto bg-white w-full py-3 shadow-md rounded-md border border-gray-300">
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
