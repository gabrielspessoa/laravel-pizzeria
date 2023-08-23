import Order from "@/Components/Order";
import ChefLayout from "@/Layouts/ChefLayout";
import { IOrder } from "@/Utils/types";
import { AnimatePresence, motion } from "framer-motion";

export default function Pedidos({ pedidos }: { pedidos: IOrder[] }) {
    console.log(pedidos);

    return (
        <ChefLayout header={{ title: "Pedidos" }} className="h-full">
            <div className="relative flex">
                <div className="flex-1">
                    <h2 className="mt-6 ml-6 font-medium">Pedidos em espera</h2>
                    <div className="grid h-fit grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center flex-1 gap-5 p-6">
                        <AnimatePresence>
                            {pedidos
                                .filter((pedido) => pedido.status === "pending")
                                .map((pedido) => (
                                    <Order key={pedido.id} data={pedido} />
                                ))}
                        </AnimatePresence>
                    </div>
                </div>
                <AnimatePresence>
                    {pedidos.filter((pedido) => pedido.status === "in_progress")
                        .length > 0 && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            transition={{
                                type: "tween",
                                ease: [0, 1, 0, 1],
                                duration: 0.3,
                            }}
                            className="p-6 bg-white border-l"
                        >
                            <h3 className="mb-4 font-medium text-center">
                                Pedidos em andamento
                            </h3>
                            <div className="flex flex-col gap-4">
                                {pedidos
                                    .filter(
                                        (pedido) =>
                                            pedido.status === "in_progress"
                                    )
                                    .map((pedido) => (
                                        <Order key={pedido.id} data={pedido} />
                                    ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ChefLayout>
    );
}
