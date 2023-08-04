import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function NovoProduto() {
    const { data, setData, processing, post, errors, transform } = useForm({
        name: "",
        sub_title: "",
        description: "",
        price: "",
        sale_price: "",
        image_url: "",
        category_id: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.loading("Salvando...", { id: "insertToast" });
        post(route("admin.produtos.store"), {
            data,
            onSuccess: () => toast.success("Sucesso", { id: "insertToast" }),
            onError: () => toast.error("Erro", { id: "insertToast" }),
        });
    };

    return (
        <AdminLayout header={{ title: "Adicionar produto", back: true }}>
            <div className="p-6">
                <div className="overflow-hidden bg-white rounded-md shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-md px-12 py-6">
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
                                <label>Sub-título</label>
                                <Input
                                    value={data.sub_title}
                                    onChange={(e) => {
                                        setData("sub_title", e.target.value);
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
                                    onChange={(e) => {
                                        setData("description", e.target.value);
                                    }}
                                    className="w-full"
                                ></Input>
                                {errors.description && (
                                    <ErrorMessage>
                                        {errors.description}
                                    </ErrorMessage>
                                )}
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-3">
                                    <label>Price</label>
                                    <Input
                                        value={data.price}
                                        onChange={(e) => {
                                            setData("price", e.target.value);
                                        }}
                                        type="number"
                                        className="w-full"
                                    ></Input>
                                    {errors.price && (
                                        <ErrorMessage>
                                            {errors.price}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <label>Sale price</label>
                                    <Input
                                        value={data.sale_price}
                                        onChange={(e) => {
                                            setData(
                                                "sale_price",
                                                e.target.value
                                            );
                                        }}
                                        type="number"
                                        className="w-full"
                                    ></Input>
                                    {errors.sale_price && (
                                        <ErrorMessage>
                                            {errors.sale_price}
                                        </ErrorMessage>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3">
                                <label>Image URL</label>
                                <Input
                                    value={data.image_url}
                                    onChange={(e) => {
                                        setData("image_url", e.target.value);
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
                                <Input
                                    value={data.category_id}
                                    onChange={(e) => {
                                        setData("category_id", e.target.value);
                                    }}
                                    type="number"
                                    className="w-full"
                                ></Input>
                                {errors.category_id && (
                                    <ErrorMessage>
                                        {errors.category_id}
                                    </ErrorMessage>
                                )}
                            </div>
                        </div>
                        <div className="w-full px-12 py-6 bg-gray-50">
                            <Button>Salvar</Button>
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
