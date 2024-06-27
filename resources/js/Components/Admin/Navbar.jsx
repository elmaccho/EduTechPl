import React from "react";

import "/resources/css/Admin/navbar.css";

import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

import UserProfile from "../DefaultProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ user, handleOpenSideMenu, isOpened }) {
    return (
        <div className="navbar">
            <div className="navbar-left d-flex gap-4">
                <button className="open-side-menu" onClick={handleOpenSideMenu}>
                    <FontAwesomeIcon icon={faBars} className="text-xl"/>
                </button>
                <button className="searchbar-toggle">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl"/>
                </button>
            </div>
            <div className="navbar-right">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button className="admin-navbar-user-dropdown" type="button">
                            <div className="admin-navbar-user-image">
                                <UserProfile user={user} />
                            </div>
                            <p>
                                {user.name}
                                {" "}
                                {user.surname}
                            </p>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link
                            href={route("profile.index", user.id)}
                            className="dropdown-link"
                        >
                            Profil
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("homepage")}
                            className="dropdown-link"
                        >
                            Strona Główna
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
            </div>
        </div>
    );
}
