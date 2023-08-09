import NavDropdown from "@/Components/NavDropdown";
import { Tooltip } from "@/Components/Tooltip";
import {
    faArrowLeft,
    faGear,
    faHouse,
    faListCheck,
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

export default function ChefLayout({ children, className, header }: Props) {
    return (
        <div className="flex h-screen">
            <aside>
                <nav className="flex flex-col items-center w-16 h-full py-4 text-white bg-amber-600">
                    <div className="mb-5 text-2xl">
                        <span className="font-bold">L</span>
                        <span>P</span>
                    </div>
                    <div className="flex flex-col justify-between w-full h-full">
                        <NavGroup>
                            <Tooltip text="Pedidos">
                                <NavLink
                                    routeName="chef.pedidos"
                                    icon={
                                        <FontAwesomeIcon icon={faListCheck} />
                                    }
                                ></NavLink>
                            </Tooltip>
                        </NavGroup>
                        <NavGroup>
                            <Tooltip text="Opções">
                                <NavDropdown bgColor="bg-amber-500"></NavDropdown>
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
    return <div className="flex flex-col items-center gap-4">{children}</div>;
};

const NavLink = forwardRef<any, any>(
    ({ routeName, children, icon, ...props }, ref) => {
        let active = routeName ? route().current(routeName) : false;

        return (
            <Link
                href={routeName ? route(routeName) : null}
                ref={ref}
                className={twMerge([
                    "flex flex-col gap-1 justify-center px-3 w-full relative z-20 font-semibold py-4",
                    active
                        ? "bg-amber-500 before:content-[''] before:bg-white before:absolute before:bottom-0 before:top-0 before:right-0 before:w-1 before:-z-10"
                        : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:top-0 after:right-0 after:w-1 after:transition-transform after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:bg-amber-500 transition duration-200",
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
                    ? "bg-yellow-500 before:content-[''] before:bg-white before:absolute before:bottom-0 before:top-0 before:right-0 before:w-1 before:-z-10"
                    : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:top-0 after:right-0 after:w-1 after:transition-transform after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:bg-yellow-500 transition duration-200",
            ])}
            {...props}
        >
            {icon}
        </button>
    );
};
