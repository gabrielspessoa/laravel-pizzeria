import { IOrder } from "@/Utils/types";
import { faPizzaSlice, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "./Checkbox";
import { Button } from "./Button";
import { router } from "@inertiajs/react";
import { twMerge } from "tailwind-merge";
import { m as motion } from "framer-motion";

export default function Order({ data }: { data: IOrder }) {
    const randomRotate = () => {
        const angles = ["2", "3"];

        const selectedAngle = angles[Math.floor(Math.random() * angles.length)];
        const isNegative = Math.random() < 0.5;

        return `${isNegative ? "-" : ""}${selectedAngle}deg`;
    };

    const acceptOrder = () => {
        router.post(route("chef.pedidos.aceitarPedido", data.id));
    };

    const getOrderColor = (status: "pending" | "in_progress" | "completed") => {
        switch (status) {
            case "pending":
                return "bg-yellow-200 after:bg-yellow-100";
            case "in_progress":
                return "bg-blue-200 after:bg-blue-100";
            case "completed":
                return "bg-green-200 after:bg-green-100";
            default:
                return "bg-red-200 after:bg-red-100";
        }
    };

    return (
        <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
                type: "tween",
                ease: [0, 1, 0, 1],
                duration: 0.3,
            }}
            layout
            className="relative drop-shadow w-fit"
        >
            <FontAwesomeIcon
                icon={faThumbTack}
                size="xl"
                color="crimson"
                className="absolute z-10 top-0 rotate-[30deg] -translate-x-1/2 -translate-y-1/2 left-1/2"
            />
            <div
                className={twMerge(
                    "p-6 text-sm shadow w-fit after:content-[''] after:drop-shadow after:h-[10%] after:w-[10%] after:bottom-0 after:right-0 after:block after:absolute",
                    getOrderColor(data.status)
                )}
                style={{
                    rotate: randomRotate(),
                    clipPath:
                        "polygon(100% 0, 100% 90%, 90% 100%, 0 100%, 0 0)",
                }}
            >
                <div className="flex items-center justify-center gap-2 mb-2 text-base font-bold">
                    <FontAwesomeIcon icon={faPizzaSlice} />
                    <span>Pedido</span>
                </div>
                <div className="mb-2">Cliente: {data.customer.name}</div>
                <div className="mb-2">
                    Chef: {data.chef ? data.chef.name : "Nenhum"}
                </div>
                <div>
                    <fieldset className="p-2 border border-gray-800 rounded">
                        <legend className="px-2">Pedidos</legend>
                        <div>
                            {data.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="grid gap-x-4 grid-cols-[1fr,auto] py-2 first:pt-0 last:pb-0 border-b border-gray-800 last:border-b-0"
                                >
                                    <div>{product.name}</div>
                                    <div>{product.pivot.quantity}</div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <div className="flex justify-center mt-3">
                        <Button
                            variant="primary"
                            className="px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600 active:bg-green-600 focus:ring-4 focus:ring-green-500/30"
                            onClick={acceptOrder}
                        >
                            Iniciar
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
