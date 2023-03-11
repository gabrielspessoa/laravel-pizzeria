import { Button } from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import { DropdownTest } from "@/Components/DropdownTest";
import {
    faArrowLeft,
    faHouse,
    faPizzaSlice,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode;
    className?: string;
    header?: {
        title: string;
        back?: boolean;
    };
}

export default function AdminLayout({ children, className, header }: Props) {
    return (
        <div className="h-screen flex">
            <aside>
                <nav className="w-16 h-full flex flex-col items-center bg-red-600 text-white py-4">
                    <div className="text-2xl mb-5">
                        <span className="font-bold">L</span>
                        <span>P</span>
                    </div>
                    <div className="flex flex-col w-full h-full justify-between">
                        <NavGroup>
                            <NavItem
                                routeName="admin.dashboard"
                                icon={<FontAwesomeIcon icon={faHouse} />}
                            ></NavItem>
                            <NavItem
                                routeName="admin.funcionarios"
                                icon={<FontAwesomeIcon icon={faUsers} />}
                            ></NavItem>
                            <NavItem
                                routeName="admin.produtos"
                                icon={<FontAwesomeIcon icon={faPizzaSlice} />}
                            ></NavItem>
                        </NavGroup>
                        <NavGroup>
                            <NavDropdown />
                        </NavGroup>
                    </div>
                </nav>
            </aside>
            <main className="w-full overflow-auto">
                {header && (
                    <div className="w-full border-b px-6 h-14 bg-white text-xl font-semibold flex items-center">
                        {header.back && (
                            <button
                                onClick={() => history.back()}
                                className="hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full mr-3"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                        )}
                        {header.title}
                    </div>
                )}
                <div className={twMerge([className])}>{children}</div>
            </main>
        </div>
    );
}

const NavGroup = ({ children }: any) => {
    return <div className="flex flex-col items-center gap-4">{children}</div>;
};

const NavItem = ({ routeName, children, icon, as = Link }: any) => {
    let active = routeName ? route().current(routeName) : false;

    const Component = as;

    return (
        <Component
            href={routeName ? route(routeName) : null}
            className={twMerge([
                "flex flex-col gap-1 justify-center px-3 w-full relative z-20 font-semibold py-4",
                active
                    ? "bg-red-500 before:content-[''] before:bg-white before:absolute before:bottom-0 before:top-0 before:right-0 before:w-1 before:-z-10"
                    : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:top-0 after:right-0 after:w-1 after:transition-transform after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:bg-red-500 transition duration-200",
            ])}
        >
            {icon}
            {children}
        </Component>
    );
};

const NavDropdown = () => {
    return <DropdownTest align="right"></DropdownTest>;
};
