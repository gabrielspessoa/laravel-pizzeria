import { faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { router, usePage } from "@inertiajs/react";
import { Page, PageProps, Errors, ErrorBag } from "@inertiajs/core";
import axios from "axios";

export default function Cart() {
    const [open, setOpen] = useState(false);
    let { cart } = usePage().props as unknown as { cart: Array<any> };

    const handleClearCart = async () => {
        const res = await axios.delete(route("carrinho.clear"));

        if (res.status === 200) {
            router.reload();
        }
    };

    const getFinalPrice = () => {
        let finalPrice = 0.0;
        if (cart) {
            Object.values(cart).map((item) => {
                finalPrice += item.product.price * item.qty;
            });
        }
        return finalPrice;
    };

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        setOpen(true);
    }, [cart]);

    return (
        <RadixDialog.Root open={open} onOpenChange={setOpen} modal={false}>
            <RadixDialog.Trigger
                className={twMerge([
                    "flex flex-col gap-1 justify-center px-3 h-full relative z-20 font-semibold",
                    open
                        ? "before:content-[''] text-gray-800 before:bg-white before:absolute before:inset-0 before:-bottom-2 before:rounded-b-sm before:shadow-[0_3px_0_theme(colors.red.600)] before:-z-10"
                        : "after:content-[''] after:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:transition-transform after:scale-y-0 after:origin-bottom hover:after:scale-y-100",
                ])}
            >
                <span className="absolute right-0 flex items-center justify-center w-4 h-4 text-xs text-red-600 bg-white rounded-full top-2">
                    {cart ? Object.keys(cart).length : "0"}
                </span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </RadixDialog.Trigger>
            <AnimatePresence>
                {open && (
                    <RadixDialog.Portal forceMount>
                        <RadixDialog.Overlay />
                        <RadixDialog.Content className="fixed top-0 bottom-0 right-0 z-50">
                            <motion.div
                                initial={{ translateX: "100%" }}
                                animate={{ translateX: "0%" }}
                                exit={{ translateX: "100%" }}
                                transition={{
                                    type: "tween",
                                    ease: [0, 1, 0, 1],
                                    duration: 0.3,
                                }}
                                className="flex flex-col h-full text-gray-800 bg-white shadow-2xl w-72"
                            >
                                <RadixDialog.Title className="relative flex items-center p-6 font-medium text-red-600 shadow-sm">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        className="mr-3"
                                    />
                                    <span>Carrinho</span>
                                    <RadixDialog.Close
                                        asChild
                                        className="absolute -translate-y-1/2 right-6 top-1/2"
                                    >
                                        <Button variant="icon">
                                            <FontAwesomeIcon icon={faX} />
                                        </Button>
                                    </RadixDialog.Close>
                                </RadixDialog.Title>
                                <div className="flex-1 pt-3 overflow-auto bg-gray-100">
                                    <div className="flex pl-6 pr-10 mb-2 text-sm text-gray-500">
                                        <span className="flex-1">Sabor</span>
                                        <span>Qtd.</span>
                                    </div>
                                    <AnimatePresence>
                                        {cart ? (
                                            Object.values(cart).map((item) => {
                                                return (
                                                    <CartItem
                                                        key={item.product.id}
                                                        data={item}
                                                    />
                                                );
                                            })
                                        ) : (
                                            <div className="text-center">
                                                Sem items no carrinho
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col gap-3 p-6 bg-white border-t">
                                    <div>
                                        <span className="text-sm">
                                            Valor final:{" "}
                                        </span>
                                        <span className="font-medium text-green-700">
                                            R${" "}
                                            {getFinalPrice()
                                                .toFixed(2)
                                                .replace(".", ",")}
                                        </span>
                                    </div>
                                    <Button
                                        onClick={() =>
                                            router.visit(
                                                route("carrinho.checkout")
                                            )
                                        }
                                    >
                                        Finalizar
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={handleClearCart}
                                    >
                                        Limpar
                                    </Button>
                                </div>
                            </motion.div>
                        </RadixDialog.Content>
                    </RadixDialog.Portal>
                )}
            </AnimatePresence>
        </RadixDialog.Root>
    );
}

const CartItem = ({ data }: any) => {
    const handleCartItemDelete = async () => {
        const res = await axios.delete(
            route("carrinho.delete", data.product.id)
        );

        if (res.status === 200) {
            router.reload();
        }
    };

    return (
        <motion.div
            className="relative flex w-full bg-white border-b group last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "tween", ease: [0, 1, 0, 1] }}
        >
            <Button
                variant="icon"
                className="absolute w-5 h-5 text-gray-400 group-hover:text-red-600 active:bg-red-200 hover:bg-red-100 top-1 right-1"
                onClick={handleCartItemDelete}
            >
                <FontAwesomeIcon icon={faX} size="xs" />
            </Button>
            <span className="relative flex items-center w-10 h-10 my-auto ml-6">
                <img
                    className="absolute inset-0"
                    src={data.product.image_url}
                ></img>
            </span>
            <div className="flex items-center flex-1 py-6 pl-6 pr-16 overflow-hidden text-sm">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {data.product.name}
                </span>
                <span className="pl-2 ml-auto font-medium">{data.qty}</span>
            </div>
        </motion.div>
    );
};
