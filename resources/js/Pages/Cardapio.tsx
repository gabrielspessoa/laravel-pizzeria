import { Button } from "@/Components/Button";
import { OrderPizzaDialog } from "@/Dialogs/OrderPizzaDialog";
import NavLayout from "@/Layouts/NavLayout";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
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
    cart: any;
}

export default function MenuPage({ pizzas, auth, cart }: Props) {
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
        <>
            <Head title="Cardápio | LP Pizzaria" />
            <NavLayout auth={auth} className="md:mt-6">
                <div className="max-w-5xl mx-auto overflow-auto bg-white md:rounded-lg">
                    <div
                        className="flex justify-between gap-4 p-6"
                        ref={pizzaInfoRef}
                    >
                        <div className="flex flex-col flex-1 sm:flex-[2]">
                            <h1 className="mb-3 text-xl font-bold sm:text-2xl md:text-4xl font-lobster">
                                {selectedPizza?.name}
                            </h1>
                            <h3 className="mb-2 text-base font-semibold text-gray-700 sm:text-lg md:text-2xl">
                                {selectedPizza?.sub_title}
                            </h3>
                            <p className="text-base text-gray-600 md:text-lg">
                                {selectedPizza?.description}
                            </p>
                            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:mt-10">
                                <OrderPizzaDialog
                                    selectedPizza={selectedPizza}
                                />
                                <span className="mt-3 font-bold sm:ml-3 sm:mt-0">
                                    R${" "}
                                    {selectedPizza &&
                                        parseFloat(selectedPizza.price)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                </span>
                            </div>
                        </div>
                        <div className="flex-1 h-56 md:h-80">
                            {/* <div className="w-full max-w-xs bg-gray-200 rounded-full md:max-w-sm aspect-square"></div> */}
                            <img
                                src={selectedPizza?.image_url}
                                className="object-contain h-full ml-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-6 p-3">
                        {pizzas.map((item) => (
                            <button
                                className={twMerge([
                                    "px-4 py-7 relative bg-white focus:ring-8 ring-yellow-300/60 ring-0 hover:bg-gray-100 outline outline-2 outline-gray-900 after:content-[''] after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0px_4px_2px_1px_rgba(0,0,0,0.075)] items-center rounded-lg flex gap-4 cursor-pointer shadow-md transition duration-200 ease-out",
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
                                    {/* <div className="h-full bg-gray-300"></div> */}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">
                                        {item.name}
                                    </span>
                                    <span className="text-xl font-semibold tracking-widest text-green-800 font-bebas">
                                        R${" "}
                                        {parseFloat(item.price)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </NavLayout>
        </>
    );
}
