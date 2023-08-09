import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    className?: string;
    icon?: IconProp;
}

export default forwardRef<HTMLInputElement, Props>(function Input(
    { type = "text", className, icon, ...props },
    ref
) {
    return (
        <div className="relative flex flex-col items-start text-gray-600">
            <input
                {...props}
                type={type}
                className={twMerge([
                    "border border-gray-300 placeholder:text-gray-300 font-medium hover:border-yellow-400 focus:border-yellow-500 ring-0 focus:ring-yellow-500/30 ring-yellow-500/30 focus:ring-2 rounded-md transition duration-200 py-2 text-sm",
                    icon && "pl-10",
                    className,
                ])}
                ref={ref}
            />
            {icon && (
                <span className="absolute -translate-y-1/2 pointer-events-none left-3 top-1/2">
                    <FontAwesomeIcon icon={icon} size="sm" />
                </span>
            )}
        </div>
    );
});
