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
import UserProfile from "./DefaultProfile";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

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
            {auth && (
                <div className="lower-menu">
                    <Link
                        className="nav-link"
                        href={route("profile.index", auth.id)}
                    >
                        <FontAwesomeIcon icon={faUser} />{" "}
                        <p>{t("nav.profile")}</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faCalendar} />{" "}
                        <p>{t("nav.calendar")}</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faBell} />{" "}
                        <p>{t("nav.notifications")}</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faMessage} />{" "}
                        <p>{t("nav.messages")}</p>
                    </Link>
                    <Link className="nav-link">
                        <FontAwesomeIcon icon={faCartShopping} />{" "}
                        <p>{t("nav.cart")}</p>
                    </Link>
                    <Link className="nav-link" href={route("profile.edit")}>
                        <FontAwesomeIcon icon={faGear} />{" "}
                        <p>{t("nav.settings")}</p>
                    </Link>

                    <div className="more-options mt-auto">
                        {auth.isTeacher && (
                            <Link
                                href={route("course.create")}
                                className="nav-link"
                            >
                                <p>{t("nav.add_course")}</p>
                            </Link>
                        )}
                        <Link
                            href="#"
                            method="post"
                            as="button"
                            className="nav-link"
                        >
                            <p>{t("nav.add_notes")}</p>
                        </Link>
                    </div>
                </div>
            )}
            <div className="auth-wrapper">
                {auth ? (
                    <div className="logout-wrapper">
                        <div className="user-profile">
                            <UserProfile user={auth} />
                        </div>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-light"
                        >
                            {t("nav.log_out")}
                        </Link>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-2">
                        <Link
                            href={route("login")}
                            className="etp-button ps-3 pe-3 text-center"
                        >
                            {t("buttons.login")}
                        </Link>
                        <Link
                            href={route("register")}
                            className="etp-button ps-3 pe-3 text-center"
                            style={{ backgroundColor: "#100F49" }}
                        >
                            {t("buttons.register")}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
