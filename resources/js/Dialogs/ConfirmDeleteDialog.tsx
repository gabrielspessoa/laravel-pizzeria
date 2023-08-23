import { Button } from "@/Components/Button";
import * as Dialog from "@/Components/Dialog";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { router } from "@inertiajs/react";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    trigger: React.ReactNode;
    selectedPizza: any;
}

export const ConfirmDeleteDialog = ({
    open,
    setOpen,
    trigger,
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
        setOpen(false);
    };
    return (
        <Dialog.Dialog open={open} onOpenChange={setOpen} trigger={trigger}>
            <form onSubmit={handleProductDelete}>
                <div className="p-7">
                    Tem certeza de que deseja excluir o produto {selectedPizza}?
                </div>
                <div className="flex flex-row-reverse gap-2 py-3 bg-gray-50 px-7">
                    <Button variant="danger">Excluir</Button>
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => setOpen(false)}
                    >
                        Cancelar
                    </Button>
                </div>
            </form>
        </Dialog.Dialog>
    );
};
