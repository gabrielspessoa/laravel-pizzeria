import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { Listbox } from "@/Components/Listbox";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";

export default function EditarFuncionario({ funcionario, cargos }: any) {
    const { data, setData, processing, patch, errors, transform } = useForm({
        name: funcionario.name,
        email: funcionario.email,
        password: "",
        password_confirmation: "",
        role: funcionario.role,
    });

    const selectRole = (role: any) => {
        setData("role", role);
    };

    transform((data) => ({ ...data, role_id: data.role.id }));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route("admin.funcionarios.atualizar", { id: funcionario.id }), {
            data,
        });
    };

    return (
        <AdminLayout header={{ title: "Editar Funcionário", back: true }}>
            <div className="p-6">
                <div className="bg-white shadow py-6 px-12 rounded-md">
                    <form className="max-w-md" onSubmit={handleSubmit}>
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
                                <ErrorMessage>{errors.name}</ErrorMessage>
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
                                <ErrorMessage>{errors.email}</ErrorMessage>
                            )}
                        </div>
                        <div className="mt-3">
                            <label>Cargo</label>
                            <Listbox
                                options={cargos}
                                selected={data.role}
                                setSelected={selectRole}
                            ></Listbox>
                            {errors.role && (
                                <ErrorMessage>{errors.role}</ErrorMessage>
                            )}
                        </div>
                        <hr className="my-5" />
                        <h3 className="mb-2 text-lg font-bold">Trocar senha</h3>
                        <div>
                            <label>Senha</label>
                            <Input
                                value={data.password}
                                onChange={(e) => {
                                    setData("password", e.target.value);
                                }}
                                className="w-full"
                            ></Input>
                            {errors.password && (
                                <ErrorMessage>{errors.password}</ErrorMessage>
                            )}
                        </div>
                        <div className="mt-3">
                            <label>Confirmar Senha</label>
                            <Input
                                value={data.password_confirmation}
                                onChange={(e) => {
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    );
                                }}
                                className="w-full"
                            ></Input>
                            {errors.password_confirmation && (
                                <ErrorMessage>
                                    {errors.password_confirmation}
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
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

const ErrorMessage = ({ children }: any) => {
    return <div className="text-red-600 text-sm">{children}</div>;
};
