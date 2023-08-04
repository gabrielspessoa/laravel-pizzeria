import { Button } from "@/Components/Button";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { router } from "@inertiajs/react";

interface Props {
    isDialogOpen: boolean;
    setDialogOpen: (value: boolean) => void;
    selectedPizza: any;
}

export const ConfirmDeleteDialog = ({
    isDialogOpen,
    setDialogOpen,
    selectedPizza,
}: Props) => {
    const { delete: destroy } = useForm();
    const handleProductDelete = (e: React.FormEvent) => {
        e.preventDefault();
        toast.loading("Deletando...", { id: "deleteToast" });
        destroy(route("admin.produtos.destroy", selectedPizza), {
            onSuccess: () => {
                toast.success("Sucesso", { id: "deleteToast" });
                // router.reload({only: ['produtos']});
            },
            onError: () => {
                toast.error("Erro", { id: "deleteToast" });
            },
        });
        setDialogOpen(false);
    };
    return (
        <Modal
            show={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            className=""
        >
            <form onSubmit={handleProductDelete}>
                <div className="p-7">
                    Tem certeza de que deseja excluir o produto {selectedPizza}?
                </div>
                <div className="flex flex-row-reverse gap-2 py-3 bg-gray-50 px-7">
                    <Button variant="danger">Excluir</Button>
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => setDialogOpen(false)}
                    >
                        Cancelar
                    </Button>
                </div>
            </form>
        </Modal>
    );
};
