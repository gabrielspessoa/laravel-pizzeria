import { Button } from "@/Components/Button";
import { Table } from "@/Components/Table";
import AdminLayout from "@/Layouts/AdminLayout";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

export default function Produtos({ produtos }: any) {
    const produtosColumns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
                disableResizing: true,
                width: "min-content",
            },
            { Header: "Nome", accessor: "name", width: "auto" },
            {
                Header: "Preço",
                accessor: "price",
                width: 100,
                disableResizing: true,
                Cell: ({ row }: any) => (
                    <>R$ {row.original.price.replace(".", ",")}</>
                ),
            },
            {
                accessor: "action",
                Cell: ({ row }: any) => (
                    <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                ),
                width: "min-content",
                disableResizing: true,
            },
        ],
        []
    );

    const produtosData = useMemo(() => produtos, []);

    return (
        <AdminLayout header={{ title: "Lista de Produtos" }}>
            <div className="p-6">
                <Button>Adicionar</Button>
                <Table columns={produtosColumns} data={produtosData} />
            </div>
        </AdminLayout>
    );
}
