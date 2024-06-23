import { Head, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faUser } from "@fortawesome/free-solid-svg-icons";

import "/resources/css/Profile/edit.css";
import { useEffect, useState } from "react";
import PersonalInfo from "@/Components/User Settings/PersonalInfo";
import Preferences from "@/Components/User Settings/Preferences";
import Swal from "sweetalert2";

export default function Edit({ auth, appName }) {
    const [selectedForm, setSelectedForm] = useState("info");

    const switchForms = (auth) => {
        switch (selectedForm) {
            case "info":
                return <PersonalInfo user={auth}/>;
            case "preferences":
                return <Preferences/>;
        }
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            showSuccess();
        }
    });

    const showSuccess = () => {
        Swal.fire({
            title: "Sukces!",
            text: flash.success,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
        });
    };
    
    
    return (
        <MainLayout auth={auth} appName={appName}>
            <Head title="Ustawienia profilu" />
            <div className="settings-container">
                <div className="settings-navigation-wrapper">
                    <button
                        className={`setting-navigation-row text-left ${selectedForm == 'info' ? 'setting-nav-active ' : ''}`}
                        onClick={() => setSelectedForm("info")}
                    >
                        <div className="setting-row-icon">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="setting-icon"
                            />
                        </div>
                        <div className="setting-row-text">
                            <div className="setting-row-title">Informacje</div>
                            <div className="setting-row-description">
                                Zaktualizuj swoje zdjęcie profilowe, imię i
                                nazwisko, a także inne informacje.
                            </div>
                        </div>
                    </button>
                    <button
                        className={`setting-navigation-row text-left ${selectedForm == 'preferences' ? 'setting-nav-active ' : ''}`}
                        onClick={() => setSelectedForm("preferences")}
                    >
                        <div className="setting-row-icon">
                            <FontAwesomeIcon
                                icon={faSliders}
                                className="setting-icon"
                            />
                        </div>
                        <div className="setting-row-text">
                            <div className="setting-row-title">Preferencje</div>
                            <div className="setting-row-description">
                                Dostosuj wygląd, motyw
                            </div>
                        </div>
                    </button>
                </div>
                <div className="settings-forms">{switchForms(auth)}</div>
            </div>
        </MainLayout>
    );
}
