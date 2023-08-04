import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Input";
import { Head, Link, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import { Button } from "@/Components/Button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as
                | "name"
                | "email"
                | "password"
                | "password_confirmation",
            event.target.type === "checkbox"
                ? event.target.checked + ""
                : event.target.value
        );
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        post(route("register"));
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
                        <label htmlFor="name">Nome</label>

                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            handleChange={handleOnChange}
                            required
                        />

                        <div className="text-sm text-red-600 mt-2">
                            {errors.name}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email">E-mail</label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={handleOnChange}
                            required
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
                            autoComplete="new-password"
                            handleChange={handleOnChange}
                            required
                        />

                        <div className="text-sm text-red-600 mt-2">
                            {errors.password}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password_confirmation">
                            Confirmar senha
                        </label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={handleOnChange}
                            required
                        />

                        <div className="text-sm text-red-600 mt-2">
                            {errors.password_confirmation}
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Já tem uma conta?
                        </Link>

                        <Button className="ml-4" disabled={processing}>
                            Registrar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
