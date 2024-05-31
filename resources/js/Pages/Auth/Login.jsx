import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import "../../../css/Auth/login.css";

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
        <div className="login-container min-h-screen">
            <Head title="Zaloguj się" />

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
                        className="mb-2 mt-3 etp-input"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError
                        message={errors.password}
                        className="mt-1 mb-4"
                    />

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
                            <span className="ms-2 text-light text-sm me-2">
                                Zapamiętaj mnie
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
