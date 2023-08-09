import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { Listbox } from "@/Components/LegacyListbox";
import { Select } from "@/Components/Select";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";

export default function EditarFuncionario({ funcionario, cargos }: any) {
    const { data, setData, processing, patch, errors, transform } = useForm({
        name: funcionario.name,
        email: funcionario.email,
        password: "",
        password_confirmation: "",
        role_id: funcionario.role_id,
    });

    console.log(funcionario);

    const selectRole = (role_id: any) => {
        setData("role_id", role_id);
    };

    // transform((data) => ({ ...data, role_id: data.role.id }));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route("admin.funcionarios.atualizar", { id: funcionario.id }), {
            data,
        });
    };

    return (
        <AdminLayout header={{ title: "Editar Funcionário", back: true }}>
            <div className="p-6">
                <div className="px-12 py-6 bg-white rounded-md shadow">
                    <form className="max-w-md" onSubmit={handleSubmit}>
                        <div className="flex max-w-2xl gap-5 px-12 py-6 whitespace-nowrap">
                            <div className="flex-[2]">
                                <h3 className="mb-2 text-lg font-bold">
                                    Informações Gerais
                                </h3>
                                <div>
                                    <label>Nome</label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                        className="w-full"
                                    ></Input>
                                    {errors.name && (
                                        <ErrorMessage>
                                            {errors.name}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <label>E-mail</label>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => {
                                            setData("email", e.target.value);
                                        }}
                                        className="w-full"
                                    ></Input>
                                    {errors.email && (
                                        <ErrorMessage>
                                            {errors.email}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <label>Cargo</label>
                                    <Select
                                        items={cargos}
                                        value={data.role_id.toString()}
                                        onValueChange={selectRole}
                                    ></Select>
                                    {errors.role_id && (
                                        <ErrorMessage>
                                            {errors.role_id}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <Button>Salvar</Button>
                                </div>
                                <hr className="my-5" />
                                <h3 className="mb-2 text-lg font-bold">
                                    Excluir conta
                                </h3>
                                <div>
                                    <Button className="text-white bg-red-500 hover:bg-red-400 active:bg-red-600 shadow-red-500/40">
                                        Excluir conta
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

const ErrorMessage = ({ children }: any) => {
    return <div className="text-sm text-red-600">{children}</div>;
};
