import { Button } from "@/Components/Button";
import Modal from "@/Components/Modal";
import { OrderPizzaDialog } from "@/Components/OrderPizzaDialog";
import NavLayout from "@/Layouts/NavLayout";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    pizzas: {
        id: number;
        name: string;
        sub_title: string;
        description: string;
        price: string;
        sale_price: string;
        image_url: string;
    }[];
    auth: any;
}

export default function MenuPage({ pizzas, auth }: Props) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    // return <pre>{JSON.stringify(pizzas, undefined, 2)}</pre>;
    // const pizzas = [
    //     {
    //         id: 0,
    //         name: "Margherita",
    //         subTitle: "Pizza Margherita",
    //         description:
    //             "Pizza clássica italiana com tomate, mussarela fresca e manjericão.",
    //         price: 30.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    //     {
    //         id: 1,
    //         name: "Quatro Queijos",
    //         subTitle: "Pizza Quatro Queijos",
    //         description:
    //             "Pizza com mussarela, parmesão, gorgonzola e provolone derretidos.",
    //         price: 35.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    //     {
    //         id: 2,
    //         name: "Frango com Catupiry",
    //         subTitle: "Pizza de Frango com Catupiry",
    //         description: "Pizza de frango desfiado, catupiry e milho verde.",
    //         price: 40.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    //     {
    //         id: 3,
    //         name: "Calabresa",
    //         subTitle: "Pizza de Calabresa",
    //         description: "Pizza com fatias de calabresa, cebola e mussarela.",
    //         price: 32.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    //     {
    //         id: 4,
    //         name: "Portuguesa",
    //         subTitle: "Pizza Portuguesa",
    //         description:
    //             "Pizza com presunto, cebola, pimentão, ovos e azeitonas.",
    //         price: 38.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    //     {
    //         id: 5,
    //         name: "Vegetariana",
    //         subTitle: "Pizza Vegetariana",
    //         description:
    //             "Pizza com abobrinha, berinjela, pimentão, cebola e azeitonas pretas.",
    //         price: 42.0,
    //         image: "/storage/pizza-banner.png",
    //     },
    // ];

    const pizzaInfoRef = useRef(null);

    const [selectedPizza, setSelectedPizza] = useState<any>(pizzas[0]);

    const selectPizza = (id: number) => {
        setSelectedPizza(pizzas.find((pizza) => pizza.id == id));
        (pizzaInfoRef.current! as HTMLDivElement).scrollIntoView({
            behavior: "smooth",
        });
    };

    if (pizzas.length === 0) {
        return <div>Opa, erro kkk</div>;
    }

    return (
        <NavLayout auth={auth} className="md:mt-6">
            <div className="bg-white md:rounded-lg max-w-5xl mx-auto overflow-auto">
                <div
                    className="flex justify-between p-6 gap-4"
                    ref={pizzaInfoRef}
                >
                    <div className="flex flex-col flex-1 sm:flex-[2]">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-lobster mb-3">
                            {selectedPizza?.name}
                        </h1>
                        <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-slate-700">
                            {selectedPizza?.sub_title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-600">
                            {selectedPizza?.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-10">
                            <Button
                                className="rounded-full py-2 px-10 font-semibold shadow-lg shadow-yellow-500/20"
                                onClick={() => setDialogOpen(true)}
                            >
                                Pedir <FontAwesomeIcon icon={faMotorcycle} />
                            </Button>
                            <OrderPizzaDialog
                                isDialogOpen={isDialogOpen}
                                setDialogOpen={setDialogOpen}
                                selectedPizza={selectedPizza}
                            />
                            <span className="mt-3 sm:ml-3 sm:mt-0 font-bold">
                                R${" "}
                                {selectedPizza &&
                                    parseFloat(selectedPizza.price)
                                        .toFixed(2)
                                        .replace(".", ",")}
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 h-56 md:h-80">
                        {/* <div className="max-w-xs md:max-w-sm w-full aspect-square rounded-full bg-slate-200"></div> */}
                        <img
                            src={selectedPizza?.image_url}
                            className="object-contain h-full ml-auto"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-6 p-3">
                    {pizzas.map((item) => (
                        <div
                            className={twMerge([
                                "px-4 py-7 relative bg-white hover:bg-slate-100 outline outline-2 outline-slate-900 after:content-[''] after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0px_4px_2px_1px_rgba(0,0,0,0.075)] items-center rounded-lg flex gap-4 cursor-pointer shadow-md transition-colors duration-200 ease-out",
                                item.id === selectedPizza.id &&
                                    "bg-yellow-300 hover:bg-yellow-400",
                            ])}
                            onClick={() => selectPizza(item.id)}
                            key={item.id}
                        >
                            <div className="max-h-24 aspect-square">
                                <img
                                    src={item.image_url}
                                    width={96}
                                    height={96}
                                />
                                {/* <div className="bg-slate-300 h-full"></div> */}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">
                                    {item.name}
                                </span>
                                <span className="font-semibold font-bebas tracking-widest text-xl text-green-800">
                                    R${" "}
                                    {parseFloat(item.price)
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </NavLayout>
    );
}
