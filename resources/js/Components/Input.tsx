import React, {
    forwardRef,
    InputHTMLAttributes,
    MutableRefObject,
    useEffect,
    useRef,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    className?: string;
}

export default forwardRef<HTMLInputElement, Props>(function Input(
    { type = "text", className, ...props },
    ref
) {
    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={twMerge([
                    "border border-gray-300 hover:border-yellow-400 focus:border-yellow-500 ring-0 ring-gray-400 focus:ring-2 focus:ring-yellow-500/30 rounded-md transition duration-200 py-2 text-sm",
                    className,
                ])}
                ref={ref}
            />
        </div>
    );
});
