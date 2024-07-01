import React from "react";
import { useTranslation } from "react-i18next";

export default function About({ user }) {
    const { t } = useTranslation();

    return (
        <div className="about-wrapper">
            <div className="row m-0">
                <p className="text-light h3">
                    <b>{t('profile.about_me')}</b>
                </p>
            </div>
            <div className="row m-0 overflow-hidden">
                <p className="text-light user-about">
                    {user.about ? user.about : t('inputs.no_description')}
                </p>
            </div>
            <div className="row m-0"></div>
        </div>
    );
}
