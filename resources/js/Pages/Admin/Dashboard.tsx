import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboardPage({ auth }: any) {
    return (
        <AdminLayout header={{ title: "Dashboard" }}>
            <div className="p-6">Olá, {auth.user.name}</div>
        </AdminLayout>
    );
}
