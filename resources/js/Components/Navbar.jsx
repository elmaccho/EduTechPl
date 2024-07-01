import React from "react";
import "/resources/css/navbar.css";

import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBell,
    faCalendar,
    faCartShopping,
    faMagnifyingGlass,
    faMessage,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./DefaultProfile";
import { useTranslation } from "react-i18next";

export default function Navbar({ appName, auth, openSideMenu }) {
    const { t } = useTranslation();

    return (
        <nav className="etp-navbar">
            <div className="upper-navbar">
                <button className="open-side-menu" onClick={openSideMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <Link href="/">
                    <h2 className="h3 text-light m-0">
                        <strong>{appName}</strong>
                    </h2>
                </Link>
                <div className="search-bar">
                    <input
                        className="etp-search-bar"
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder={t("inputs.search")}
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="nav-links">
                    {auth ? (
                        <>
                            <Link className="nav-link">
                                <FontAwesomeIcon icon={faCalendar} />
                            </Link>
                            <Link className="nav-link">
                                <FontAwesomeIcon icon={faBell} />
                            </Link>
                            <Link className="nav-link">
                                <FontAwesomeIcon icon={faMessage} />
                            </Link>
                            <Link className="nav-link">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        className="navbar-user-dropdown"
                                        type="button"
                                    >
                                        <UserProfile user={auth} />
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("profile.index", auth.id)}
                                        className="dropdown-link"
                                    >
                                        {t("nav.profile")}
                                    </Dropdown.Link>
                                    {auth.isTeacher && (
                                        <Dropdown.Link
                                            href={route("course.create")}
                                            className="dropdown-link"
                                        >
                                            {t("nav.add_course")}
                                        </Dropdown.Link>
                                    )}
                                    <Dropdown.Link
                                        href="#"
                                        className="dropdown-link"
                                    >
                                        {t("nav.add_notes")}
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("profile.edit")}
                                        className="dropdown-link"
                                    >
                                        {t("nav.settings")}
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="dropdown-link"
                                    >
                                        {t("nav.log_out")}
                                    </Dropdown.Link>
                                    {auth.isAdmin && (
                                        <Dropdown.Link
                                            href={route("adminpanel.index")}
                                            className="dropdown-link bg-red-700 text-light"
                                        >
                                            {t("nav.admin_panel")}
                                        </Dropdown.Link>
                                    )}
                                </Dropdown.Content>
                            </Dropdown>
                        </>
                    ) : (
                        <div className="user-auth-wrapper">
                            <Link
                                href={route("login")}
                                className="etp-button ps-3 pe-3"
                            >
                                {t("buttons.login")}
                            </Link>
                            <Link
                                href={route("register")}
                                className="etp-button ps-3 pe-3"
                                style={{ backgroundColor: "#100F49" }}
                            >
                                {t("buttons.register")}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="lower-navbar">
                <div className="search-bar">
                    <input
                        className="etp-search-bar"
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder={t("inputs.search")}
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
