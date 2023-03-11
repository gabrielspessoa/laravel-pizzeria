import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={twMerge([
                    "bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 shadow-md shadow-yellow-500/40 text-black rounded px-4 py-2 text-sm transition",
                    props.className,
                    props.disabled &&
                        "opacity-70 hover:bg-yellow-400 active:bg-yellow-400 cursor-wait",
                ])}
            >
                {props.children}
            </button>
        );
    }
);
