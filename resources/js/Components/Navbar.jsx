import React from "react";
import "/resources/css/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendar, faCartShopping, faMagnifyingGlass, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function Navbar({ appName }) {
    return (
        <nav>
            <h1>{appName}</h1>
            <div className="search-bar">
                <input type="text" name="" id="" />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className="nav-links">
                <Link href="#">
                    <button className="etp-button ps-3 pe-3">
                        Twoje kursy
                    </button>
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faCalendar} />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faBell} />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faMessage} />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </div>
        </nav>
    );
}
