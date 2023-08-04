import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import { Button } from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";

interface Props {
    status: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "email" | "password" | "remember",
            event.target.type === "checkbox"
                ? event.target.checked + ""
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="min-h-screen flex flex-col items-center sm:justify-center mt-12 sm:mt-0 px-5">
            <h1 className="text-3xl mb-5">
                <span className="font-bold">Laravel </span>
                <span className="text-gray-600">Pizzeria</span>
            </h1>
            <div className="bg-white outline outline-1 outline-gray-200 max-w-md w-full p-6 rounded-md shadow-md">
                <Head title="Log in" />

                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="email">E-mail</label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={handleOnChange}
                        />
                        <div className="text-sm text-red-600 mt-2">
                            {errors.email}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Senha</label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />
                        <div className="text-sm text-red-600 mt-2">
                            {errors.password}
                        </div>
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                type="checkbox"
                                name="remember"
                                value={data.remember}
                                onChange={handleOnChange}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Lembrar de mim
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Esqueceu sua senha?
                            </Link>
                        )}

                        <Button className="ml-4" disabled={processing}>
                            Entrar
                        </Button>
                    </div>
                </form>
                <Link
                    href={route("register")}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Não tem uma conta? Registre-se
                </Link>
            </div>
        </div>
    );
}
