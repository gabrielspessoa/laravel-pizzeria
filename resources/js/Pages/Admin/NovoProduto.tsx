import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { Select } from "@/Components/Select";
import AdminLayout from "@/Layouts/AdminLayout";
import { brlMask } from "@/Utils/utils";
import { faBrazilianRealSign } from "@fortawesome/free-solid-svg-icons";
import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";

export default function NovoProduto({ categorias }: any) {
    const { data, setData, processing, post, errors, transform } = useForm({
        name: "",
        sub_title: "",
        description: "",
        price: "",
        sale_price: "",
        image_url: "",
        category_id: "",
    });

    const selectCategory = (category_id: any) => {
        setData({ ...data, category_id });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.loading("Salvando...", { id: "insertToast" });
        post(route("admin.produtos.store"), {
            data,
            onSuccess: () => toast.success("Sucesso", { id: "insertToast" }),
            onError: () => toast.error("Erro", { id: "insertToast" }),
        });
    };

    transform((data) => ({
        ...data,
        price: data.price.replace(/[^\d.,]/g, "").replace(",", "."),
        sale_price: data.sale_price.replace(/[^\d.,]/g, "").replace(",", "."),
    }));

    return (
        <>
            <Head title="Admin - Novo Produto" />
            <AdminLayout header={{ title: "Adicionar produto", back: true }}>
                <div className="p-6">
                    <div className="overflow-hidden bg-white rounded-md shadow">
                        <form onSubmit={handleSubmit}>
                            <div className="flex max-w-2xl gap-5 px-12 py-6 text-sm whitespace-nowrap">
                                <div className="flex-[2]">
                                    <h3 className="mb-2 text-lg font-bold">
                                        Informações Gerais
                                    </h3>
                                    <div>
                                        <label>Nome</label>
                                        <Input
                                            value={data.name}
                                            placeholder="Margherita"
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
                                        <label>Sub-título</label>
                                        <Input
                                            value={data.sub_title}
                                            placeholder="Pizza Margherita"
                                            onChange={(e) => {
                                                setData(
                                                    "sub_title",
                                                    e.target.value
                                                );
                                            }}
                                            className="w-full"
                                        ></Input>
                                        {errors.sub_title && (
                                            <ErrorMessage>
                                                {errors.sub_title}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <label>Descrição</label>
                                        <Input
                                            value={data.description}
                                            placeholder="Pizza clássica italiana com tomate, mussarela fresca e manjericão."
                                            onChange={(e) => {
                                                setData(
                                                    "description",
                                                    e.target.value
                                                );
                                            }}
                                            className="w-full"
                                        ></Input>
                                        {errors.description && (
                                            <ErrorMessage>
                                                {errors.description}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <label>Image URL</label>

                                        <Input
                                            value={data.image_url}
                                            placeholder="/storage/pizza-banner.png"
                                            onChange={(e) => {
                                                setData(
                                                    "image_url",
                                                    e.target.value
                                                );
                                            }}
                                            className="w-full"
                                        ></Input>
                                        {errors.image_url && (
                                            <ErrorMessage>
                                                {errors.image_url}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <label>Category ID</label>
                                        <Select
                                            items={categorias}
                                            value="1"
                                            onValueChange={selectCategory}
                                        />
                                        {errors.category_id && (
                                            <ErrorMessage>
                                                {errors.category_id}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="mt-9">
                                        <label>Preço</label>
                                        <MaskedInput
                                            mask={brlMask}
                                            placeholder="R$ 00,00"
                                            guide={false}
                                            value={data.price}
                                            onChange={(e) => {
                                                setData(
                                                    "price",
                                                    e.target.value
                                                );
                                            }}
                                            render={(
                                                maskedRef: any,
                                                maskedProps
                                            ) => (
                                                <Input
                                                    className="w-full"
                                                    ref={maskedRef}
                                                    {...maskedProps}
                                                />
                                            )}
                                        />
                                        {errors.price && (
                                            <ErrorMessage>
                                                {errors.price}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <label>Preço em desconto</label>
                                        <MaskedInput
                                            mask={brlMask}
                                            placeholder="R$ 00,00"
                                            guide={false}
                                            value={data.sale_price}
                                            onChange={(e) => {
                                                setData(
                                                    "sale_price",
                                                    e.target.value
                                                );
                                            }}
                                            render={(
                                                maskedRef: any,
                                                maskedProps
                                            ) => (
                                                <Input
                                                    className="w-full"
                                                    ref={maskedRef}
                                                    {...maskedProps}
                                                />
                                            )}
                                        />
                                        {errors.sale_price && (
                                            <ErrorMessage>
                                                {errors.sale_price}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-12 py-6 bg-gray-50">
                                <Button>Salvar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

const ErrorMessage = ({ children }: any) => {
    return <div className="text-sm text-red-600">{children}</div>;
};
