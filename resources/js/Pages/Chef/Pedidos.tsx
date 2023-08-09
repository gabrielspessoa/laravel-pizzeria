import Order from "@/Components/Order";
import ChefLayout from "@/Layouts/ChefLayout";
import { IOrder } from "@/Utils/types";

export default function Pedidos({ pedidos }: { pedidos: IOrder[] }) {
    console.log(pedidos);
    return (
        <ChefLayout header={{ title: "Pedidos" }}>
            <div className="p-6">
                <div className="flex gap-5">
                    {pedidos.map((pedido) => (
                        <Order key={pedido.id} data={pedido} />
                    ))}
                </div>
            </div>
        </ChefLayout>
    );
}
