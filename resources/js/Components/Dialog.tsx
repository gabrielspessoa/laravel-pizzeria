import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence, m as motion } from "framer-motion";
import { ReactNode, forwardRef, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends RadixDialog.DialogProps {
    trigger: ReactNode;
}

export const Dialog = ({ children, trigger, open, onOpenChange }: Props) => {
    return (
        <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
            {trigger}
            <AnimatePresence>
                {open && (
                    <RadixDialog.Portal forceMount>
                        <RadixDialog.Overlay
                            className="fixed inset-0 z-10 bg-gray-800/75"
                            asChild
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            />
                        </RadixDialog.Overlay>
                        {children}
                    </RadixDialog.Portal>
                )}
            </AnimatePresence>
        </RadixDialog.Root>
    );
};

export const Trigger = RadixDialog.Trigger;
export const Content = forwardRef<
    HTMLDivElement,
    RadixDialog.DialogContentProps
>(({ children, className }, ref) => {
    return (
        <div className="fixed inset-0 z-20 px-4 py-8 focus:outline-none">
            <RadixDialog.Content
                ref={ref}
                asChild
                className={twMerge(
                    "bg-white relative mx-auto rounded-lg w-full max-w-md shadow-xl",
                    className
                )}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                        y: -18,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.98,
                        y: -18,
                    }}
                    transition={{
                        ease: [0, 1, 0, 1],
                        duration: 0.3,
                    }}
                >
                    {children}
                </motion.div>
            </RadixDialog.Content>
        </div>
    );
});
export const Title = RadixDialog.Title;
export const Description = RadixDialog.Description;
export const Close = RadixDialog.Close;
