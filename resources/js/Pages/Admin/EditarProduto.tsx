import { Button } from "@/Components/Button";
import Input from "@/Components/Input";
import { Listbox } from "@/Components/LegacyListbox";
import { Select } from "@/Components/Select";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";

export default function EditarProduto({ produto, categorias }: any) {
    const { data, setData, processing, patch, errors, transform } = useForm({
        name: produto.name,
        sub_title: produto.sub_title,
        description: produto.description,
        price: produto.price,
        sale_price: produto.sale_price,
        image_url: produto.image_url,
        category_id: produto.category_id,
    });

    const selectCategory = (category_id: any) => {
        setData({ ...data, category_id });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.produtos.update", { id: produto.id }), { data });
    };
    return (
        <AdminLayout header={{ title: "Editar Produto", back: true }}>
            <div className="p-6">
                <div className="bg-white border rounded-md shadow">
                    <form onSubmit={handleSubmit}>
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
                                    <label>Sub-título</label>
                                    <Input
                                        value={data.sub_title}
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
                                    <label>URL da Imagem</label>
                                    <Input
                                        value={data.image_url}
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
                                    <label>Categoria</label>
                                    <Select
                                        items={categorias}
                                        value={data.category_id.toString()}
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
                                    <Input
                                        value={data.price}
                                        onChange={(e) => {
                                            setData("price", e.target.value);
                                        }}
                                        className="w-full"
                                    ></Input>
                                    {errors.price && (
                                        <ErrorMessage>
                                            {errors.price}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <label>Preço com desconto</label>
                                    <Input
                                        value={data.sale_price}
                                        onChange={(e) => {
                                            setData(
                                                "sale_price",
                                                e.target.value
                                            );
                                        }}
                                        className="w-full"
                                    ></Input>
                                    {errors.sale_price && (
                                        <ErrorMessage>
                                            {errors.sale_price}
                                        </ErrorMessage>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-5 px-12 py-6 border-t border-gray-100 bg-gray-50">
                            <Button>Salvar</Button>
                            <Button variant="outline" type="button">
                                Cancelar
                            </Button>
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
