import React from "react";
import '/resources/css/mobileapp.css';

import { Link } from "@inertiajs/react";

import mobileappimage from '/public/img/mobile app/mascot - mobile.png';
import googleplayimage from '/public/img/mobile app/download 1.png';
import appstoreimage from '/public/img/mobile app/download 2.png';

import { useTranslation } from "react-i18next";

export default function MobileApp(){
    const { t } = useTranslation();
    
    return(
        <div className="mobile-app-container">
            <div className="mobile-app-box">
                <div className="mobile-app-image">
                    <img src={mobileappimage} alt="" />
                </div>
                <div className="mobile-app-text">
                    <h2>{t('mobile_app.title')}</h2>
                    <p>{t('mobile_app.description')}</p>
                </div>
                <div className="mobile-app-lazy-images">
                    <Link href="https://play.google.com/store/games?hl=pl&pli=1" target="_blank">
                        <img src={googleplayimage} alt="" />
                    </Link>
                    <Link href="https://www.apple.com/pl/app-store/" target="_blank">
                        <img src={appstoreimage} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}