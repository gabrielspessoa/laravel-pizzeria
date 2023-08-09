import { IOrder } from "@/Utils/types";
import { faPizzaSlice, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Order({ data }: { data: IOrder }) {
    const randomRotate = () => {
        const angles = ["2", "3"];

        const selectedAngle = angles[Math.floor(Math.random() * angles.length)];
        const isNegative = Math.random() < 0.5;

        return `${isNegative ? "-" : ""}${selectedAngle}deg`;
    };

    return (
        <div className="relative drop-shadow">
            <FontAwesomeIcon
                icon={faThumbTack}
                size="xl"
                color="crimson"
                className="absolute z-10 top-0 rotate-[30deg] -translate-x-1/2 -translate-y-1/2 left-1/2"
            />
            <div
                className="p-6 text-sm bg-yellow-200 rounded-md shadow w-fit after:content-[''] after:bg-yellow-100 after:drop-shadow after:h-[10%] after:w-[10%] after:bottom-0 after:right-0 after:block after:absolute"
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
                <div>
                    <fieldset className="p-2 border border-gray-300 rounded">
                        <legend className="px-2">Pedidos</legend>
                        <ul className="list-disc list-inside">
                            {data.products.map((product) => (
                                <li>{product.name}</li>
                            ))}
                        </ul>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}
