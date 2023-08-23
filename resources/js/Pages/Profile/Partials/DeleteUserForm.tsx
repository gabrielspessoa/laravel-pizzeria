import { useRef, useState, FormEvent } from "react";
import * as Dialog from "@/Components/Dialog";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/Input";
import { useForm } from "@inertiajs/react";
import Input from "@/Components/Input";

interface Props {
    className: string;
}

export default function DeleteUserForm({ className }: Props) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e: FormEvent) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <Dialog.Dialog
                open={confirmingUserDeletion}
                onOpenChange={closeModal}
                trigger={
                    <button onClick={confirmUserDeletion}>
                        Delete Account
                    </button>
                }
            >
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="block w-3/4 mt-1"
                            placeholder="Password"
                        />

                        {/* <InputError
                            message={errors.password as string}
                            className="mt-2"
                        /> */}
                    </div>

                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <button className="ml-3" disabled={processing}>
                            Delete Account
                        </button>
                    </div>
                </form>
            </Dialog.Dialog>
        </section>
    );
}
