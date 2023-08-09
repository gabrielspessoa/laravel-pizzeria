import NavLayout from "@/Layouts/NavLayout";
import { Head } from "@inertiajs/react";

export default function CartPage(props: any) {
    return (
        <>
            <Head title="Carrinho | LP Pizzaria" />
            <NavLayout auth={props.auth}>Carrinho</NavLayout>
        </>
    );
}
