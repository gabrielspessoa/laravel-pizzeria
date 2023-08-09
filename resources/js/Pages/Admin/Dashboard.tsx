import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function AdminDashboardPage({ auth }: any) {
    return (
        <>
            <Head title="Admin - Dashboard" />
            <AdminLayout header={{ title: "Dashboard" }}>
                <div className="p-6">Olá, {auth.user.name}</div>
            </AdminLayout>
        </>
    );
}
