import NavDropdown from "@/Components/NavDropdown";
import { Tooltip } from "@/Components/Tooltip";
import {
    faArrowLeft,
    faGear,
    faHouse,
    faPizzaSlice,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { ReactNode, forwardRef } from "react";
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
        <div className="flex h-screen">
            <aside>
                <nav className="fixed bottom-0 flex items-center w-full h-16 px-4 text-white bg-red-600 sm:px-0 sm:py-4 sm:relative sm:w-16 sm:h-full sm:flex-col">
                    <div className="hidden mb-5 text-2xl sm:block">
                        <span className="font-bold">L</span>
                        <span>P</span>
                    </div>
                    <div className="flex justify-between w-full h-full sm:flex-col">
                        <NavGroup>
                            <Tooltip text="Dashboard">
                                <NavLink
                                    routeName="admin.dashboard"
                                    icon={<FontAwesomeIcon icon={faHouse} />}
                                ></NavLink>
                            </Tooltip>
                            <Tooltip text="Funcionários">
                                <NavLink
                                    routeName="admin.funcionarios"
                                    icon={<FontAwesomeIcon icon={faUsers} />}
                                ></NavLink>
                            </Tooltip>
                            <Tooltip text="Produtos">
                                <NavLink
                                    routeName="admin.produtos.index"
                                    icon={
                                        <FontAwesomeIcon icon={faPizzaSlice} />
                                    }
                                ></NavLink>
                            </Tooltip>
                        </NavGroup>
                        <NavGroup>
                            <Tooltip text="Opções">
                                <NavDropdown></NavDropdown>
                            </Tooltip>
                        </NavGroup>
                    </div>
                </nav>
            </aside>
            <main className="w-full overflow-auto">
                {header && (
                    <div className="flex items-center w-full px-6 text-xl font-semibold bg-white border-b h-14">
                        {header.back && (
                            <button
                                onClick={() => history.back()}
                                className="flex items-center justify-center w-8 h-8 mr-3 rounded-full hover:bg-gray-200"
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
    return (
        <div className="flex items-center gap-4 sm:flex-col">{children}</div>
    );
};

const NavLink = forwardRef<any, any>(
    ({ routeName, children, icon, ...props }, ref) => {
        let active = routeName ? route().current(routeName) : false;

        return (
            <Link
                href={routeName ? route(routeName) : null}
                ref={ref}
                className={twMerge([
                    "flex flex-col gap-1 justify-center px-3 h-full sm:h-auto w-14 sm:w-full relative z-20 font-semibold py-4",
                    active
                        ? "bg-red-500 before:content-[''] before:bg-white before:absolute before:left-0 before:right-0 before:top-0 sm:before:left-auto sm:before:bottom-0 sm:before:top-0 sm:before:right-0 before:h-1 sm:before:h-full sm:before:w-1 before:-z-10"
                        : "after:content-[''] after:bg-white after:absolute after:left-0 after:right-0 after:top-0 sm:after:left-auto sm:after:bottom-0 sm:after:top-0 sm:after:right-0 after:h-1 sm:after:h-full sm:after:w-1 after:transition-transform after:scale-y-0 sm:after:scale-x-0 after:origin-top sm:after:origin-right hover:after:scale-y-100 sm:after:scale-y-100 sm:hover:after:scale-x-100 hover:bg-red-500 transition duration-200",
                ])}
                {...props}
            >
                {icon}
            </Link>
        );
    }
);

const NavButton = ({ icon, children, ...props }: any) => {
    const active = false;
    return (
        <button
            className={twMerge([
                "flex flex-col gap-1 items-center px-3 w-full relative z-20 font-semibold py-4",
                active
                    ? "bg-red-500 before:content-[''] before:bg-white before:absolute before:bottom-0 before:top-0 before:right-0 before:w-1 before:-z-10"
                    : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:top-0 after:right-0 after:w-1 after:transition-transform after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:bg-red-500 transition duration-200",
            ])}
            {...props}
        >
            {icon}
        </button>
    );
};
