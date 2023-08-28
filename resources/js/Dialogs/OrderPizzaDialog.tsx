import { Button } from "@/Components/Button";
import * as Dialog from "@/Components/Dialog";
import Input from "@/Components/Input";
import {
    faMotorcycle,
    faShoppingCart,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
    selectedPizza: any;
}

export const OrderPizzaDialog = ({ selectedPizza }: Props) => {
    const [open, setOpen] = useState(false);
    const { data, setData, errors, setError, clearErrors } = useForm({
        qty: "1",
    });

    const formatPrice = () => {
        if (selectedPizza.price * parseInt(data.qty) > 0) {
            return (selectedPizza.price * parseInt(data.qty))
                .toFixed(2)
                .replace(".", ",");
        } else {
            return "---";
        }
    };

    const handleAddToCart = async (e: FormEvent) => {
        e.preventDefault();

        const res = await axios.post(route("carrinho.add", selectedPizza.id), {
            qty: data.qty,
        });
        if (res.status === 200) {
            router.reload();

            setOpen(false);
            setData("qty", "1");
        }
    };

    return (
        <Dialog.Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={
                <Dialog.Trigger asChild>
                    <Button className="px-10 py-4 font-semibold rounded-full shadow-lg">
                        <span className="mr-3">Pedir</span>
                        <FontAwesomeIcon icon={faMotorcycle} />
                    </Button>
                </Dialog.Trigger>
            }
        >
            <Dialog.Content className="p-7">
                <Dialog.Close
                    asChild
                    className="absolute focus:outline-none right-6 top-6"
                >
                    <Button variant="icon">
                        <FontAwesomeIcon icon={faX} />
                    </Button>
                </Dialog.Close>
                <h1 className="mb-5 text-2xl text-center font-lobster">
                    Faça seu pedido
                </h1>
                <div className="flex">
                    <form
                        className="flex flex-col mr-4 shrink-1"
                        onSubmit={handleAddToCart}
                    >
                        <span className="">Pizza {selectedPizza.name}</span>
                        <span className="flex flex-row items-center">
                            <label htmlFor="qty" className="mr-3">
                                Quantidade
                            </label>
                            <Input
                                type="number"
                                id="qty"
                                value={data.qty}
                                onChange={(e) => {
                                    if (!/^[1-9]\d*$/.test(e.target.value)) {
                                        setError(
                                            "qty",
                                            "A quantidade mínima é 1"
                                        );
                                    } else {
                                        clearErrors();
                                    }

                                    setData("qty", e.target.value);
                                }}
                                className="w-full rounded"
                            />
                        </span>
                        <div className="mt-1 text-sm text-red-500">
                            {errors.qty}
                        </div>
                        <span className="mt-4">
                            <span>
                                Preço total:
                                <span className="ml-4 text-green-600">
                                    <span className="text-xs">R$</span>
                                    <span className="ml-2 text-lg">
                                        {formatPrice()}
                                    </span>
                                </span>
                            </span>
                        </span>
                        <Button className="w-full px-10 mt-3 font-semibold text-center rounded-full">
                            Adicionar no carrinho
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="ml-3"
                            />
                        </Button>
                    </form>
                    <div className="ml-auto max-h-28 aspect-square shrink-0">
                        <img src={selectedPizza.image_url} />
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Dialog>
    );
};
