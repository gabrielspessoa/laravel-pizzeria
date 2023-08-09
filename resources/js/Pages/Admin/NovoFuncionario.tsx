import Input from "@/Components/Input";
import AdminLayout from "@/Layouts/AdminLayout";

export default function NovoFuncionario() {
    return (
        <AdminLayout header={{ title: "Cadastro de Funcionário", back: true }}>
            <div className="p-6">
                <div className="overflow-hidden bg-white rounded-md shadow">
                    <form>
                        <div className="flex max-w-2xl gap-5 px-12 py-6 text-sm whitespace-nowrap">
                            <div className="flex-[2]">
                                <h3 className="mb-2 text-lg font-bold">
                                    Informações Gerais
                                </h3>
                                <div>
                                    <label>Nome</label>
                                    <Input className="w-full" />
                                </div>
                                <div className="mt-3">
                                    <label>E-mail</label>
                                    <Input className="w-full" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <Input className="w-full" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
