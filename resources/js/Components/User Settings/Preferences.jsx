import React from "react";
import { useTranslation } from "react-i18next";

export default function Preferences({ user }){
    const { t } = useTranslation();
    
    return(
        <>
            <h2 className="h2 text-light forms-settings-title">{t('settings.preferences.title')}</h2>
        </>
    )
}