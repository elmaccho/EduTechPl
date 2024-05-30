import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import "../../../css/login.css";

import {
    faApple,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        // <GuestLayout>
        //     <Head title="Log in" />

        //     <form onSubmit={submit} className='formeeee'>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) => setData('remember', e.target.checked)}
        //                 />
        //                 <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

                    // <PrimaryButton className="ms-4" disabled={processing}>
                    //     Log in
                    // </PrimaryButton>
        //         </div>
        //     </form>

        // </GuestLayout>
        <div className="login-container min-h-screen">
            <div className="login-form">
                <div className="row m-0 text-light text-center">
                    <b className="h2 m-0">Miło cię widzieć!</b>
                </div>
                <div className="row m-0 mb-5 text-light text-center">
                    <p>Czym się dzisiaj zajmiesz?</p>
                </div>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="etp-input"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1 mb-4" />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Hasło"
                        className="mt-3 etp-input"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-1 mb-4" />

                    <div className="form-row mb-3">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-light text-sm"
                            >
                                Zapomniałeś hasła?
                            </Link>
                        )}
                        <label className="flex items-center">
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400 me-2">
                                Remember me
                            </span>
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                        </label>
                    </div>
                    <div className="row m-0 d-flex justify-content-center mb-5">
                        <button type="submit" className="etp-button">
                            Zaloguj się
                        </button>
                    </div>
                    <div className="row m-0 d-flex justify-content-center mb-4">
                        <span className="text-light d-flex gap-2 justify-content-center">
                            <p>Nie masz jeszcze konta?</p>
                            <Link className="link" href={route("register")}>
                                Zarejestruj się!
                            </Link>
                        </span>
                    </div>
                </form>
                <div className="row m-0 mb-4">
                    <span className="br-text">Lub</span>
                </div>

                <div className="row m-0 mb-2">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        className="social-btn text-light facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="icon" />{" "}
                        Zaloguj się przez Facebooka
                    </a>
                </div>
                <div className="row m-0 mb-2">
                    <a
                        href="https://www.google.com"
                        target="_blank"
                        className="social-btn text-dark google"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="icon" />{" "}
                        Zaloguj się przez Google
                    </a>
                </div>
                <div className="row m-0 mb-2">
                    <a
                        href="https://www.apple.com/pl/"
                        target="_blank"
                        className="social-btn text-light apple"
                    >
                        <FontAwesomeIcon icon={faApple} className="icon" />{" "}
                        Zaloguj się przez Apple
                    </a>
                </div>
            </div>
        </div>
    );
}
