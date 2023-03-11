import { Button } from "@/Components/Button";
import NavLayout from "@/Layouts/NavLayout";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Head } from "@inertiajs/react";
import { useEffect } from "react";

export default function WelcomePage(props: any) {
    return (
        <>
            <Head title="Pizzaria" />
            <NavLayout
                auth={props.auth}
                className="flex flex-col grow"
                navClassName="shadow-zinc-900/10"
            >
                <div className="grow landing-bg text-white relative overflow-hidden">
                    <div className="max-w-[70%] pt-32 px-6 flex flex-col relative z-20">
                        <span className="font-bold text-6xl uppercase font-bebas drop-shadow-[0px_2px_4px_theme(colors.zinc.900)]">
                            Massa fina, recheio farto e sabor inesquecível.
                        </span>
                        <Link href={route("cardapio")} className="w-fit mt-14">
                            <Button className="w-fit text-zinc-800 font-bold text-lg rounded-full shadow-lg shadow-yellow-500/20">
                                Ver cardápio
                                <FontAwesomeIcon
                                    className="ml-3"
                                    icon={faPizzaSlice}
                                />
                            </Button>
                        </Link>
                    </div>
                    <div
                        className="absolute -right-40 top-1/2 -translate-y-1/2"
                        style={{ width: "clamp(400px, 75vw, 700px)" }}
                    >
                        <img
                            src="/storage/landing-pizza.png"
                            className="w-full"
                        />
                    </div>
                </div>
            </NavLayout>
        </>
    );
}
