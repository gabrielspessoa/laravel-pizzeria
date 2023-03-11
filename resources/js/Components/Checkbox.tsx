import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, Props>(function Checkbox(
    props,
    ref
) {
    return (
        <input
            type="checkbox"
            ref={ref}
            {...props}
            className={twMerge([
                "bg-slate-300 rounded-md border-none text-yellow-500 focus:ring-yellow-500 transition",
            ])}
            onChange={props.onChange}
        />
    );
});
