import React from "react";
import "/resources/css/footer.css";

import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ appName}) {
    return (
        <footer>
            <div className="footer-col footer-col1">
                <Link href="/">
                    <h2 className="h3 text-light m-0">
                        <strong>{appName}</strong>
                    </h2>
                </Link>
                <p className="text-light">+48 111 222 333</p>
                <p className="text-light">biuro@edutech.pl</p>
            </div>
            <div className="footer-col footer-col2">
                <Link>O nas</Link>
                <Link>Pobierz aplikację</Link>
                <Link>Skontaktuj się z nami</Link>
            </div>
            <div className="footer-col footer-col3">
                <Link>Warunki</Link>
                <Link>Polityka prywatności</Link>
                <Link>Pomoc techniczna</Link>
                <Link>Ustawienia plików cookie</Link>
            </div>
            <div className="footer-col footer-col4">
                <Link>
                    <button className="etp-button">
                        <FontAwesomeIcon icon={faFacebook} />  
                    </button>
                </Link>
                <Link>
                    <button className="etp-button">
                        <FontAwesomeIcon icon={faYoutube} />  
                    </button>
                </Link>
                <Link>
                    <button className="etp-button">
                        <FontAwesomeIcon icon={faInstagram} />  
                    </button>
                </Link>
                <Link>
                    <button className="etp-button">
                        <FontAwesomeIcon icon={faXTwitter} />  
                    </button>
                </Link>
                <Link>
                    <button className="etp-button">
                        <FontAwesomeIcon icon={faLinkedin} />  
                    </button>
                </Link>
            </div>
        </footer>
    );
}
