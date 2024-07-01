import React, { useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import UserProfile from "../DefaultProfile";

import "/resources/css/Profile/personalinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function PersonalInfo({ mustVerifyEmail, status, progress, user }) {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user?.name,
            surname: user?.surname,
            email: user?.email,
            address: user?.address,
            phone_number: user?.phone_number,
            profile_image_path: "",
            about: user?.about,
        });

    const submit = (e) => {
        e.preventDefault();       

        post(route("profile.update"), {
            _method: "put",
        });
    };

    const { t } = useTranslation();

    return (
        <>
            <h2 className="h2 text-light forms-settings-title">{t('settings.informations.title')}</h2>
            <form
                onSubmit={submit}
                className="d-flex flex-column align-items-center"
            >
                <div className="form-edit-row">
                    <div className="form-col inputs-wrapper">
                        <div className="mb-3">
                            <InputLabel htmlFor="name" value={t('inputs.first_name')} />
                            <input
                                className="user-settings-input"
                                id="name"
                                type="text"
                                placeholder={t('inputs.first_name')}
                                value={data.name}
                                required
                                autoComplete="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="surname" value={t('inputs.last_name')} />
                            <input
                                className="user-settings-input"
                                id="surname"
                                type="text"
                                placeholder={t('inputs.last_name')}
                                value={data.surname}
                                required
                                autoComplete="surname"
                                onChange={(e) =>
                                    setData("surname", e.target.value)
                                }
                            />
                            <InputError message={errors.surname} />
                        </div>

                        <div className="mb-3">
                            <InputLabel
                                htmlFor="phone_number"
                                value={t('inputs.phone_number')}
                            />
                            <input
                                className="user-settings-input"
                                id="phone_number"
                                type="tel"
                                placeholder={t('inputs.phone_number')}
                                value={data.phone_number || ""}
                                autoComplete="phone_number"
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                maxLength="9"
                            />
                            <InputError message={errors.phone_number} />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="address" value={t('inputs.address')} />
                            <input
                                className="user-settings-input"
                                id="address"
                                type="text"
                                placeholder={t('inputs.address')}
                                value={data.address || ""}
                                autoComplete="address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            <InputError message={errors.address} />
                        </div>
                        <div className="mb-3">
                            <InputLabel htmlFor="about" value={t('inputs.description')} />
                            <textarea
                                className="user-settings-input user-settings-textarea"
                                id="about"
                                placeholder={t('inputs.description')}
                                value={data.about || ""}
                                onChange={(e) => 
                                    setData("about", e.target.value)
                                }
                            ></textarea>
                            <InputError message={errors.address} />
                        </div>
                    </div>
                    <div className="form-col">
                        <div className="user-image-wrapper mb-5">
                            <div className="outside-ring">
                                {preview ? (
                                    <>
                                        <img
                                            src={preview}
                                            alt={user.name + " " + user.surname}
                                            className="profile-picture"
                                        />
                                    </>
                                ) : (
                                    <UserProfile user={user} />
                                )}
                            </div>
                        </div>
                        <label
                            htmlFor="image_picker"
                            className="image-picker-label"
                        >
                            <p>{t('inputs.change_profile_image')} </p>
                            <FontAwesomeIcon icon={faImage} />
                        </label>
                        <input
                            type="file"
                            id="image_picker"
                            name="profile_image_path"
                            hidden
                            onChange={(e) => {
                                setData(
                                    "profile_image_path",
                                    e.target.files[0]
                                );
                                handleImageChange(e);
                            }}
                        />

                        <InputError message={errors.profile_image_path} />
                    </div>
                </div>

                <button
                    type="submit"
                    className="etp-button ps-5 pe-5 pt-2 pb-2"
                >
                    {t('buttons.save')}
                </button>
            </form>
        </>
    );
}
