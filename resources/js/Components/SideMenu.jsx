import React from "react";
import "/resources/css/sidemenu.css";
import { useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faCalendar,
    faBell,
    faMessage,
    faCartShopping,
    faUser,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function SideMenu({ appName, auth, isOpen, closeSideMenu }) {
    const menuRef = useRef(null);

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeSideMenu();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={`side-menu ${isOpen ? "toggle-menu" : ""}`}
            ref={menuRef}
        >
            <div className="upper-menu mb-5">
                <Link href="/">
                    <h2 className="h3 text-light m-0">
                        <strong>{appName}</strong>
                    </h2>
                </Link>
                <button className="close-menu" onClick={closeSideMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            {auth.user && (
                <div className="lower-menu">
                    <Link href="#">
                        <button className="etp-button ps-3 pe-3">
                            Twoje kursy
                        </button>
                    </Link>
                    <Link
                        className="nav-link"
                        href={route("profile.index", auth.user.id)}
                    >
                        <FontAwesomeIcon icon={faUser} /> <p>Profil</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faCalendar} /> <p>Kalendarz</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faBell} /> <p>Powiadomienia</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faMessage} /> <p>Wiadomości</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faCartShopping} /> <p>Koszyk</p>
                    </Link>
                    <Link className="nav-link" href={route("profile.edit")}>
                        <FontAwesomeIcon icon={faGear} /> <p>Ustawienia</p>
                    </Link>

                    <div className="more-options mt-auto">
                        {auth.user.account_type == "teacher" && (
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="nav-link"
                            >
                                <p>Dodaj Kurs</p>
                            </Link>
                        )}
                        <Link
                            href="#"
                            method="post"
                            as="button"
                            className="nav-link"
                        >
                            <p>Dodaj notatki</p>
                        </Link>
                    </div>
                </div>
            )}
            <div className="auth-wrapper">
                {auth.user ? (
                    <div className="logout-wrapper">
                        <div className="user-profile">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-gray-300/100 text-lg"
                            />
                        </div>
                        <Link
                            href="#"
                            method="post"
                            as="button"
                            className="text-light"
                        >
                            Wyloguj się
                        </Link>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-2">
                        <Link
                            href={route("login")}
                            className="etp-button ps-3 pe-3 text-center"
                        >
                            Zaloguj się
                        </Link>
                        <Link
                            href={route("register")}
                            className="etp-button ps-3 pe-3 text-center"
                            style={{ backgroundColor: "#100F49" }}
                        >
                            Zarejestruj się
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
