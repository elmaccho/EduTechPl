import React, { useState } from "react";
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

export default function Navbar({ appName, auth, openSideMenu }) {
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
                        placeholder="Szukaj kursów"
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="nav-links">
                    {auth.user ? (
                        <>
                            <Link href="#">
                                <button className="etp-button ps-3 pe-3">
                                    Twoje kursy
                                </button>
                            </Link>
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
                                        <UserProfile user={auth.user}/>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route(
                                            "profile.index",
                                            auth.user.id
                                        )}
                                        className="dropdown-link"
                                    >
                                        Profil
                                    </Dropdown.Link>
                                    {auth.user.account_type == 'teacher' && (
                                        <Dropdown.Link
                                            href="#"
                                            method="post"
                                            as="button"
                                            className="dropdown-link"
                                        >
                                            Dodaj Kurs
                                        </Dropdown.Link>
                                    )}
                                    <Dropdown.Link
                                        href="#"
                                        method="post"
                                        as="button"
                                        className="dropdown-link"
                                    >
                                        Dodaj notatki
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('profile.edit')}
                                        className="dropdown-link"
                                    >
                                        Ustawienia
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="dropdown-link"
                                    >
                                        Wyloguj się
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </>
                    ) : (
                        <div className="user-auth-wrapper">
                            <Link
                                href={route("login")}
                                className="etp-button ps-3 pe-3"
                            >
                                Zaloguj się
                            </Link>
                            <Link
                                href={route("register")}
                                className="etp-button ps-3 pe-3"
                                style={{ backgroundColor: "#100F49" }}
                            >
                                Zarejestruj się
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
                        placeholder="Szukaj kursów"
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
