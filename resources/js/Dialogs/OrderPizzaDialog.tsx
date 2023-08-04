import { faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Components/Button";
import Modal from "../Components/Modal";
import Input from "@/Components/Input";

interface Props {
    isDialogOpen: boolean;
    setDialogOpen: (value: boolean) => void;
    selectedPizza: any;
}

export const OrderPizzaDialog = ({
    isDialogOpen,
    setDialogOpen,
    selectedPizza,
}: Props) => {
    return (
        <Modal
            show={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            className="p-7"
        >
            <button
                className="absolute right-3 top-3"
                onClick={() => setDialogOpen(false)}
            >
                <FontAwesomeIcon icon={faX} />
            </button>
            <h1 className="mb-5 text-2xl text-center font-lobster">
                Faça seu pedido
            </h1>
            <div className="flex">
                <div className="flex flex-col mr-4 shrink-1">
                    <span className="">Sabor: {selectedPizza.name}</span>
                    <span className="flex flex-col sm:flex-row sm:items-center">
                        <label htmlFor="qty" className="mr-3">
                            Quantidade
                        </label>
                        <Input
                            type="number"
                            id="qty"
                            className="w-full rounded"
                            defaultValue={1}
                        />
                    </span>
                </div>
                <div className="ml-auto max-h-28 aspect-square shrink-0">
                    <img src={selectedPizza.image_url} />
                </div>
            </div>
            <Button className="px-10 mx-auto mt-3 font-semibold text-center rounded-full w-fit">
                Adicionar no carrinho
                <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
            </Button>
        </Modal>
    );
};
