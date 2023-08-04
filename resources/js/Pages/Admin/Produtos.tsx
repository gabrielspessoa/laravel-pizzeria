import { Button } from "@/Components/Button";
import { Table } from "@/Components/Table";
import { ConfirmDeleteDialog } from "@/Dialogs/ConfirmDeleteDialog";
import AdminLayout from "@/Layouts/AdminLayout";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useMemo, useState } from "react";

export default function Produtos({ produtos }: any) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState<number | null>(null);

    const produtosColumns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
                disableResizing: true,
                width: "min-content",
            },
            { Header: "Nome", accessor: "name", width: "min-content" },
            { Header: "Sub-título", accessor: "sub_title", width: "auto" },
            {
                Header: "Preço",
                accessor: "price",
                width: "min-content",
                disableResizing: true,
                Cell: ({ row }: any) => (
                    <>R$ {row.original.price.replace(".", ",")}</>
                ),
            },
            {
                accessor: "action",
                Cell: ({ row }: any) => (
                    <div className="flex gap-2">
                        <Button
                            variant="icon"
                            className="text-red-500 hover:bg-red-200 active:bg-red-300"
                            onClick={() => {
                                setSelectedPizza(row.original.id);
                                setDialogOpen(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button asChild variant="icon">
                            <Link
                                href={route(
                                    "admin.produtos.edit",
                                    row.original.id
                                )}
                            >
                                <FontAwesomeIcon icon={faPen} />
                            </Link>
                        </Button>
                    </div>
                ),
                width: "min-content",
                disableResizing: true,
            },
        ],
        []
    );

    const produtosData = useMemo(() => produtos, [produtos]);

    return (
        <AdminLayout header={{ title: "Lista de Produtos" }}>
            <ConfirmDeleteDialog
                isDialogOpen={isDialogOpen}
                setDialogOpen={setDialogOpen}
                selectedPizza={selectedPizza}
            />
            <div className="p-6">
                <div className="mb-3">
                    <Button variant="icon" asChild>
                        <Link href={route("admin.produtos.create")}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </Button>
                </div>
                <Table columns={produtosColumns} data={produtosData} />
            </div>
        </AdminLayout>
    );
}
