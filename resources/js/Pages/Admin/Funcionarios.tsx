import { Button } from "@/Components/Button";
import { Table } from "@/Components/Table";
import AdminLayout from "@/Layouts/AdminLayout";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { ButtonHTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function AdminFuncionariosPage({ funcionarios }: any) {
    // return <pre>{JSON.stringify(funcionarios, undefined, 2)}</pre>;
    const funcionariosColumns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
                width: "min-content",
                disableResizing: true,
            },
            { Header: "Nome", accessor: "name" },
            {
                Header: "E-mail",
                accessor: "email",
                width: "1fr",
            },
            { Header: "Cargo", accessor: "role.name" },
            {
                accessor: "action",
                disableSortBy: true,
                width: "min-content",
                disableResizing: true,
                Cell: (row: any) => (
                    <div className="flex">
                        <ActionButton
                            as={Link}
                            href={route("admin.funcionarios.editar", {
                                id: row.row.original.id,
                            })}
                        >
                            <FontAwesomeIcon icon={faPen} />
                        </ActionButton>
                    </div>
                ),
            },
        ],
        []
    );
    const funcionariosData = useMemo(() => funcionarios, []);

    return (
        <AdminLayout header={{ title: "Funcionários" }}>
            <div className="p-6">
                <Table
                    columns={funcionariosColumns}
                    data={funcionariosData}
                ></Table>
            </div>
        </AdminLayout>
    );
}

const ActionButton = ({
    children,
    className,
    as = "button",
    ...props
}: any) => {
    let Component = as;
    return (
        <Component
            {...props}
            className={twMerge([
                "hover:bg-gray-200 text-gray-500 h-8 w-8 rounded-full flex items-center justify-center transition duration-150",
                className,
            ])}
        >
            {children}
        </Component>
    );
};
