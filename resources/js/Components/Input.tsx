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
                    "border-2 border-slate-300 hover:border-slate-400 focus:border-yellow-500 ring-0 ring-slate-400 focus:ring-1 focus:ring-yellow-500 rounded-md transition duration-200",
                    className,
                ])}
                ref={ref}
            />
        </div>
    );
});
