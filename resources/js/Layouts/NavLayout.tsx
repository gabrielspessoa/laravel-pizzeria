import Dropdown from "@/Components/Dropdown";
import {
    faBars,
    faCaretDown,
    faCartShopping,
    faHouse,
    faListCheck,
    faPizzaSlice,
    faRightFromBracket,
    faToolbox,
    faTruck,
    faUser,
    faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function NavLayout({
    children,
    auth,
    className,
    navClassName,
}: {
    children: ReactNode;
    auth?: any;
    className?: string;
    navClassName?: string;
}) {
    const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <nav
                className={twMerge([
                    "h-16 px-6 md:px-14 flex items-center shadow-md shadow-slate-500/10 bg-red-600 text-white text-sm relative z-10",
                    navClassName,
                ])}
            >
                <div className="h-full flex items-center mr-12">
                    <Link href="/">
                        <img
                            src="/storage/pizza-logo.png"
                            width={48}
                            height={48}
                        />
                    </Link>
                </div>
                <div className="hidden md:flex items-center h-full w-full justify-between">
                    <NavGroup>
                        <NavItem
                            href={route("inicio")}
                            icon={<FontAwesomeIcon icon={faHouse} />}
                            active={route().current("inicio")}
                        >
                            Início
                        </NavItem>
                        <NavItem
                            href={route("cardapio")}
                            icon={<FontAwesomeIcon icon={faPizzaSlice} />}
                            active={route().current("cardapio")}
                        >
                            Cardápio
                        </NavItem>
                        <NavItem
                            href={route("meus-pedidos")}
                            icon={<FontAwesomeIcon icon={faListCheck} />}
                            active={route().current("meus-pedidos")}
                        >
                            Meus Pedidos
                        </NavItem>
                        {auth.role_id === 2 && (
                            <NavItem
                                href={route("admin.dashboard")}
                                icon={<FontAwesomeIcon icon={faToolbox} />}
                            >
                                Painel do Admin
                            </NavItem>
                        )}
                    </NavGroup>
                    <NavGroup>
                        <NavItem
                            href="/carrinho"
                            icon={<FontAwesomeIcon icon={faCartShopping} />}
                        ></NavItem>
                        {auth?.user ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button>Perfil</button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href="/profile">
                                        Perfil
                                    </Dropdown.Link>
                                    <Dropdown.Link href="/logout" method="post">
                                        Sair
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <NavItem href="login">Entrar</NavItem>
                        )}
                    </NavGroup>
                </div>
                <div className="block md:hidden ml-auto">
                    <Link href="/cart" className="mr-6">
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </Link>
                    <button
                        onClick={() => setMobileNavigationOpen((prev) => !prev)}
                    >
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </button>
                </div>
            </nav>
            <Transition
                show={isMobileNavigationOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    className={`md:hidden absolute left-0 right-0 bg-white font-semibold border-b z-50`}
                >
                    <div className="px-6 flex flex-col">
                        <Link
                            href="/"
                            className={`py-4 relative ${
                                route().current("welcome") && "text-red-700"
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="mr-5"
                                fixedWidth
                            />
                            Início
                        </Link>
                        <Link
                            href="/order"
                            className={`py-4 relative ${
                                route().current("order") && "text-red-700"
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faTruck}
                                className="mr-5"
                                fixedWidth
                            />
                            Fazer Pedido
                        </Link>
                        <Link
                            href="/menu"
                            className={`py-4 relative ${
                                route().current("menu") && "text-red-700"
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faPizzaSlice}
                                className="mr-5"
                                fixedWidth
                            />
                            Cardápio
                        </Link>
                        <Link
                            href="/my-orders"
                            className={`py-4 relative ${
                                route().current("my-orders") && "text-red-700"
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faListCheck}
                                className="mr-5"
                                fixedWidth
                            />
                            Meus pedidos
                        </Link>
                    </div>
                    <div className="flex flex-col py-4 border-t px-6">
                        <button
                            className="text-start"
                            onClick={() => setProfileMenuOpen((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-5" />
                            Gabriel Pessoa{" "}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                        <div
                            className={`${
                                isProfileMenuOpen ? "flex" : "hidden"
                            } flex-col ml-3`}
                        >
                            <Link href="/profile" className="py-3">
                                <FontAwesomeIcon
                                    icon={faUserGear}
                                    className="mr-3"
                                />
                                Perfil
                            </Link>
                            <button className="text-start text-red-600">
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    className="mr-3"
                                />
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
            <main className={`${className}`}>{children}</main>
            <footer className="bg-red-600 text-white px-6 md:px-14 py-3 text-center">
                <span className="font-semibold">
                    &copy; 2023 Laravel Pizzeria
                </span>
            </footer>
        </div>
    );
}

const NavGroup = ({ children }: any) => {
    return <div className="flex items-center gap-5 h-full">{children}</div>;
};

const NavItem = ({
    children,
    href,
    icon,
    active,
}: {
    children?: ReactNode;
    href: string;
    icon?: ReactNode;
    active?: true;
}) => {
    return (
        <Link
            href={href}
            className={twMerge([
                "flex flex-col gap-1 justify-center px-3 h-full relative z-20 font-semibold",
                active
                    ? "before:content-[''] text-slate-800 before:bg-white before:absolute before:inset-0 before:-bottom-2 before:rounded-b-sm before:shadow-[0_3px_0_theme(colors.red.600)] before:-z-10"
                    : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:transition-transform after:scale-y-0 after:origin-bottom hover:after:scale-y-100",
            ])}
        >
            {icon}
            {children}
        </Link>
    );
};
