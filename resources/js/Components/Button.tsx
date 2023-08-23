import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    asChild?: boolean;
    href?: string;
}

const variants = {
    primary:
        "bg-yellow-400 hover:bg-yellow-300 focus:outline-none ring-yellow-400/30 ring-0 focus:ring-4 active:bg-yellow-500 shadow-sm font-medium text-gray-700 rounded-md px-4 py-2 text-sm transition",
    danger: "bg-red-500 hover:bg-red-400 active:bg-red-600 shadow-sm font-medium text-white rounded-md px-4 py-2 text-sm transition",
    outline:
        "bg-white border border-gray-300 shadow-sm font-medium rounded-md px-4 py-2 text-sm transition hover:text-gray-500",
    icon: "bg-transparent hover:bg-gray-200 active:bg-gray-300 h-7 w-7 rounded-full flex items-center justify-center",
};

const selectVariant = (variant: keyof typeof variants = "primary") =>
    variants[variant];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, asChild, ...props }, ref) => {
        const Component = asChild ? Slot : "button";
        return (
            <Component
                {...props}
                ref={ref}
                className={twMerge([
                    "select-none",
                    selectVariant(variant),
                    props.className,
                    props.disabled &&
                        "opacity-70 hover:bg-yellow-400 active:bg-yellow-400 cursor-wait",
                ])}
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                {props.children}
            </Component>
        );
    }
);
