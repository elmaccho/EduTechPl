import React, { useState } from "react";

import "/resources/css/Admin/sidemenu.css";
import { Link, usePage } from "@inertiajs/react";
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
    const { url } = usePage();
    
    return (
        <div
            className={`sidemenu-container mi`}
        >
            <div className="sidemenu-brand-title">
                <div className="sidemenu-brand-logo"></div>
                <div className="sidemenu-brand-name">{appName}</div>
                <button
                    className="close-side-menu"
                    onClick={handleCloseSideMenu}
                >
                    <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                </button>
            </div>
            <div className="sidemenu-links mt-5">
                <Link
                    className={`sidemenu-link ${url === '/panel' ? 'link-active' : ''}`}
                    href={route('adminpanel.index')}
                >
                    <div className="link-icon text-blue-500">
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className="link-name font-semibold text-blue-900">
                        Start
                    </div>
                </Link>
                <Link
                    className={`sidemenu-link ${url === '/panel/uzytkownicy' ? 'link-active' : ''}`}
                    href={route('adminpanel.users')}
                >
                    <div className="link-icon text-violet-500">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="link-name font-semibold text-violet-900">
                        Użytkownicy
                    </div>
                </Link>
                <Link
                    className={`sidemenu-link ${url === '/panel/kursy' ? 'link-active' : ''}`}
                    href={route('adminpanel.courses')}
                >
                    <div className="link-icon text-orange-500">
                        <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className="link-name font-semibold text-orange-900">
                        Kursy
                    </div>
                </Link>
                <Link
                    className={`sidemenu-link ${url === '/panel/notatki' ? 'link-active' : ''}`}
                    href={route('adminpanel.notes')}
                >
                    <div className="link-icon text-red-500">
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                    <div className="link-name font-semibold text-red-900">
                        Notatki
                    </div>
                </Link>
                <Link
                    className={`sidemenu-link ${url === '/panel/kategorie' ? 'link-active' : ''}`}
                    href={route('adminpanel.categories')}
                >
                    <div className="link-icon text-green-500">
                        <FontAwesomeIcon icon={faTree} />
                    </div>
                    <div className="link-name font-semibold text-green-900">
                        Kategorie
                    </div>
                </Link>
                <Link
                    className={`sidemenu-link ${url === '/panel/slider' ? 'link-active' : ''}`}
                    href={route('adminpanel.slider')}
                >
                    <div className="link-icon text-red-700">
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                    <div className="link-name font-semibold text-red-900">
                        Slider
                    </div>
                </Link>
            </div>
        </div>
    );
}
