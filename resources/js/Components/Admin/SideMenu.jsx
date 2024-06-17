import React, { useState } from "react";

import "/resources/css/Admin/sidemenu.css";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBook,
    faTree,
    faImage,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faNoteSticky } from "@fortawesome/free-regular-svg-icons";

export default function SideMenu({ appName, handleCloseSideMenu, isOpened }) {
    const [active, setActive] = useState("dashboard");

    return (
        <div className={`sidemenu-container min-h-screen ${isOpened ? "sidemenu-toggle" : ""}`}>
            <div className="sidemenu-brand-title">
                <div className="sidemenu-brand-logo"></div>
                <div className="sidemenu-brand-name">{appName}</div>
                <button className="close-side-menu" onClick={handleCloseSideMenu}>
                    <FontAwesomeIcon icon={faXmark} className="text-3xl"/>
                </button>
            </div>
            <div className="sidemenu-links mt-5">
                <button
                    className={`sidemenu-link ${
                        active == "dashboard" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("dashboard")}
                >
                    <div className="link-icon text-blue-500">
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className="link-name font-semibold text-blue-900">
                        Start
                    </div>
                </button>
                <button
                    className={`sidemenu-link ${
                        active == "users" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("users")}
                    href={route('adminpanel.users')}
                >
                    <div className="link-icon text-violet-500">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="link-name font-semibold text-violet-900">
                        Użytkownicy
                    </div>
                </button>
                <button
                    className={`sidemenu-link ${
                        active == "courses" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("courses")}
                >
                    <div className="link-icon text-orange-500">
                        <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className="link-name font-semibold text-orange-900">
                        Kursy
                    </div>
                </button>
                <button
                    className={`sidemenu-link ${
                        active == "notes" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("notes")}
                >
                    <div className="link-icon text-red-500">
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                    <div className="link-name font-semibold text-red-900">
                        Notatki
                    </div>
                </button>
                <button
                    className={`sidemenu-link ${
                        active == "categories" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("categories")}
                >
                    <div className="link-icon text-green-500">
                        <FontAwesomeIcon icon={faTree} />
                    </div>
                    <div className="link-name font-semibold text-green-900">
                        Kategorie
                    </div>
                </button>
                <button
                    className={`sidemenu-link ${
                        active == "slider" ? "link-active" : ""
                    }`}
                    onClick={() => setActive("slider")}
                >
                    <div className="link-icon text-red-700">
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                    <div className="link-name font-semibold text-red-900">
                        Slider
                    </div>
                </button>
            </div>
        </div>
    );
}
