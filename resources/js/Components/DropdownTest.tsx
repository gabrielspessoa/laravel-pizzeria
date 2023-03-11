import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface Props {
    align?: "right" | "left";
}

export const DropdownTest = ({ align = "left" }: Props) => {
    return (
        <Menu as="div" className="relative">
            <Menu.Button>Botao</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={twMerge([
                        "absolute top-0 bg-white text-slate-900 shadow-md rounded",
                        align === "left" && "right-full mr-2",
                        align === "right" && "left-full ml-2",
                    ])}
                >
                    <div className="p-1">
                        <Menu.Item>
                            <a>Perfil</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a>Sair</a>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
