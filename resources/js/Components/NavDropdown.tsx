import {
    faArrowRightFromBracket,
    faGear,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, router } from "@inertiajs/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    // trigger: React.ReactNode;
    bgColor?: string;
}

const NavDropdown = ({ bgColor = "bg-red-500", ...props }: Props, ref: any) => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger asChild>
                <button
                    {...props}
                    ref={ref}
                    className={twMerge([
                        "flex flex-col gap-1 items-center px-3 w-full relative z-20 font-semibold py-4",
                        open
                            ? `${bgColor} before:content-[''] before:bg-white before:absolute before:bottom-0 before:top-0 before:right-0 before:w-1 before:-z-10`
                            : `hover:${bgColor} after:content-[''] after:bg-white after:absolute after:bottom-0 after:top-0 after:right-0 after:w-1 after:transition-transform after:scale-x-0 after:origin-right hover:after:scale-x-100 transition duration-200`,
                    ])}
                >
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    side="left"
                    className="py-2 bg-white border border-gray-200 shadow rounded-r-md min-w-[150px]"
                >
                    <NavDropdown.Item asChild>
                        <Link href={route("profile.edit")}>
                            <FontAwesomeIcon icon={faUser} />
                            Perfil
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Separator />
                    <NavDropdown.Item
                        className="text-red-600"
                        onClick={() => router.post(route("logout"))}
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Sair
                    </NavDropdown.Item>
                    {/* <DropdownMenu.Arrow /> */}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

NavDropdown.Item = ({
    children,
    className,
    ...props
}: DropdownMenu.MenuItemProps) => {
    return (
        <DropdownMenu.Item
            className={twMerge(
                "flex items-center text-sm gap-2 px-4 py-2 cursor-pointer radix-highlighted:outline-none radix-highlighted:bg-gray-200",
                className
            )}
            {...props}
        >
            {children}
        </DropdownMenu.Item>
    );
};

NavDropdown.Separator = () => {
    return <DropdownMenu.Separator className="my-1 border-b" />;
};

export default forwardRef(NavDropdown);
