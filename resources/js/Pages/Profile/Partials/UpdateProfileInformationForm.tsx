import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";
import type { Page, PageProps, Errors, ErrorBag } from "@inertiajs/core";
import Input from "@/Components/Input";

interface Props {
    mustVerifyEmail: boolean;
    status: string;
    className: string;
}

interface InertiaPage extends Page<PageProps> {
    props: {
        errors: Errors & ErrorBag;
        auth: {
            user: {
                name: string;
                email: string;
            };
        };
    };
}

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}: Props) {
    const user = usePage<InertiaPage & { [key: string]: any }>().props.auth
        .user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label htmlFor="name">Name</label>

                    <Input
                        id="name"
                        className="block w-full mt-1"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />

                    {/* <InputError className="mt-2" message={errors.name as string} /> */}
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>

                    <Input
                        id="email"
                        type="email"
                        className="block w-full mt-1"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    {/* <InputError className="mt-2" message={errors.email as string} /> */}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <p className="text-sm text-gray-600">Saved.</p>
                </div>
            </form>
        </section>
    );
}
