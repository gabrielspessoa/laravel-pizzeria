import { faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import Modal from "./Modal";

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
            className="max-w-2xl p-7 flex flex-col relative"
        >
            <button
                className="absolute right-3 top-3"
                onClick={() => setDialogOpen(false)}
            >
                <FontAwesomeIcon icon={faX} />
            </button>
            <h1 className="text-center font-lobster text-2xl mb-5">
                Faça seu pedido
            </h1>
            <div className="flex">
                <div className="flex flex-col shrink-1 mr-4">
                    <span className="">Sabor: {selectedPizza.name}</span>
                    <span className="flex flex-col sm:flex-row sm:items-center">
                        <label htmlFor="qty" className="mr-3">
                            Quantidade
                        </label>
                        <input
                            type="number"
                            id="qty"
                            className="w-full rounded"
                            defaultValue={1}
                        />
                    </span>
                </div>
                <div className="max-h-28 aspect-square shrink-0 ml-auto">
                    <img src={selectedPizza.image} />
                </div>
            </div>
            <Button className="text-center rounded-full font-semibold w-fit mx-auto px-10 mt-3">
                Adicionar no carrinho
                <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
            </Button>
        </Modal>
    );
};
