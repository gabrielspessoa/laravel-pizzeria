import NavLayout from "@/Layouts/NavLayout";
import { Link } from "@inertiajs/react";

export default function MyOrdersPage(props: any) {
    return (
        <NavLayout auth={props.auth} className="flex flex-col grow">
            Meus Pedidos
        </NavLayout>
    );
}
