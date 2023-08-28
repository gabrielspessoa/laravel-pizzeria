import { Button } from "@/Components/Button";
import NavLayout from "@/Layouts/NavLayout";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function Checkout({ cart, auth }: any) {
    cart = Object.values(cart);

    const getFinalPrice = () => {
        let finalPrice = 0.0;
        if (cart) {
            Object.values(cart).map((item: any) => {
                finalPrice += item.product.price * item.qty;
            });
        }
        return finalPrice;
    };

    return (
        <NavLayout auth={auth} className="p-6">
            <div className="flex flex-col max-w-md p-6 mx-auto text-sm bg-white rounded-md shadow">
                <div className="flex flex-col">
                    {cart.map((item: any) => (
                        <CheckoutItem data={item} />
                    ))}
                </div>
                <div className="flex flex-col p-6 text-end">
                    <div>Total</div>
                    <div className="text-base font-medium text-green-600">
                        R$ {getFinalPrice().toFixed(2).replace(".", ",")}
                    </div>
                </div>
                <div className="flex gap-3 ml-auto">
                    <Button variant="outline" asChild>
                        <Link href={route("cardapio")}>Cancelar</Link>
                    </Button>
                    <Button>
                        Prosseguir para o pagamento{" "}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>
            </div>
        </NavLayout>
    );
}

const CheckoutItem = ({ data }: any) => {
    return (
        <div className="flex items-center p-6 border-b">
            <div className="relative w-10 h-10 mr-6">
                <img
                    src={data.product.image_url}
                    className="absolute inset-0"
                />
            </div>
            <div className="flex flex-1">
                <span className="flex-1">{data.product.name}</span>
                <span>R$ {data.product.price.replace(".", ",")}</span>
            </div>
        </div>
    );
};
