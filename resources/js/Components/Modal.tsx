import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface Props {
    children?: React.ReactNode;
    show: boolean;
    maxWidth?: string;
    closeable?: boolean;
    onClose: () => void;
    className?: string;
}

export default function Modal({
    children,
    show = false,
    maxWidth = "2xl",
    closeable = true,
    onClose = () => {},
    className,
}: Props) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
    }[maxWidth];

    return (
        <Transition show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                // className="fixed inset-0 z-50 px-4 py-6 overflow-y-auto transition-all transform"
                onClose={close}
            >
                <div className="fixed inset-y-0 left-0 z-20 w-screen overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-75"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-75"
                            leaveTo="opacity-0"
                            entered="opacity-75"
                        >
                            <div className="fixed inset-0 transition-opacity bg-gray-800" />
                        </Transition.Child>

                        <Transition.Child
                            enter="ease-out transform duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in transform duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <span
                                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Dialog.Panel
                                className={twMerge([
                                    `inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle`,
                                    className,
                                ])}
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
