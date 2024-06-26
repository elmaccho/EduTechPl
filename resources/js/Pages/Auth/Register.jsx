import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";

import "/resources/css/Auth/register.css";
import studentMascot from "/public/img/register/mascot 1.svg";
import teacherMascot from "/public/img/register/mascot - teacher 1.svg";

import {
    faApple,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CSSTransition } from "react-transition-group";

import { useTranslation } from "react-i18next";


export default function Register() {
    const [accountType, setAccountType] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [active, setActive] = useState(null);

    const handleSetActive = (button) => {
        setActive(button);
    };

    const handleAccountTypeClick = (type) => {
        if (type) {
            setAccountType(type);
            setShowForm(true);
        }
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        surname: "",
        email: "",
        account_type: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const { t } = useTranslation();

    return (
        <div className="register-container min-h-screen">
            <Head title="Rejestracja" />

            <form onSubmit={submit}>
                {!showForm ? (
                    <div className="account-type-container">
                        <div className="account-type mb-5">
                            <div className="row text-center">
                                <p className="text-light h2 mb-4">
                                    {t('inputs.account_type')}
                                </p>
                            </div>
                            <div className="types-wrapper">
                                <div
                                    className={`type-container student ${
                                        active === "student" ? "active" : ""
                                    }`}
                                    onClick={(e) => {
                                        setData("account_type", "student");
                                        handleSetActive("student");
                                    }}
                                >
                                    <div className="mascot-wrapper">
                                        <img
                                            src={studentMascot}
                                            className="mascot-img"
                                            alt="Student mascot logo"
                                        />
                                    </div>
                                    <p>{t('register.student')}</p>
                                </div>
                                <div
                                    className={`type-container teacher ${
                                        active === "teacher" ? "active" : ""
                                    }`}
                                    onClick={(e) => {
                                        setData("account_type", "teacher");
                                        handleSetActive("teacher");
                                    }}
                                >
                                    <div className="mascot-wrapper">
                                        <img
                                            src={teacherMascot}
                                            className="mascot-img"
                                            alt="Teacher mascot logo"
                                        />
                                    </div>
                                    <p>{t('register.teacher')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 d-flex justify-content-center">
                            <button
                                type="button"
                                className="etp-button"
                                onClick={() =>
                                    handleAccountTypeClick(data.account_type)
                                }
                            >
                                {t('buttons.next')}
                            </button>
                        </div>
                    </div>
                ) : (
                    <CSSTransition
                        in={showForm}
                        timeout={5500}
                        classNames="form"
                        unmountOnExit
                    >
                        <div className="register-form">
                            <div className="row text-center mb-3">
                                <p className="h2 text-light">
                                    {t('register.complete_register')}
                                </p>
                            </div>
                            <div className="name-surname-wrapper mb-3">
                                <input
                                    className="etp-input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    placeholder={t('inputs.first_name')}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError message={errors.name} />
                                <input
                                    className="etp-input"
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    autoComplete="lastname"
                                    placeholder={t('inputs.last_name')}
                                    value={data.surname}
                                    onChange={(e) =>
                                        setData("surname", e.target.value)
                                    }
                                />
                                <InputError message={errors.surname} />
                            </div>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="Email"
                                className="mb-3 etp-input"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mb-4"
                            />

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder={t('inputs.password')}
                                className="mb-3 etp-input"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-1 mb-2"
                            />

                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mb-3 etp-input"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                                placeholder={t('inputs.r_password')}
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />

                            <div className="row m-0 d-flex justify-content-center mb-5">
                                <button type="submit" className="etp-button">
                                {t('buttons.register')}
                                </button>
                            </div>
                            <div className="row m-0 mb-4">
                                <span className="br-text">{t('register.or')}</span>
                            </div>

                            <div className="row m-0 mb-2">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    className="social-btn text-light facebook"
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="icon"
                                    />{" "}
                                    {t('register.register_through_facebook')}
                                </a>
                            </div>
                            <div className="row m-0 mb-2">
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    className="social-btn text-dark google"
                                >
                                    <FontAwesomeIcon
                                        icon={faGoogle}
                                        className="icon"
                                    />{" "}
                                    {t('register.register_through_google')}
                                </a>
                            </div>
                            <div className="row m-0 mb-2">
                                <a
                                    href="https://www.apple.com/pl/"
                                    target="_blank"
                                    className="social-btn text-light apple"
                                >
                                    <FontAwesomeIcon
                                        icon={faApple}
                                        className="icon"
                                    />{" "}
                                    {t('register.register_through_apple')}
                                </a>
                            </div>
                        </div>
                    </CSSTransition>
                )}
            </form>
        </div>
    );
}
