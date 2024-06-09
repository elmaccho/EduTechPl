import React from "react";

import { usePage, useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import DefaultProfile from "../DefaultProfile";

import "/resources/css/Profile/personalinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function PersonalInfo({ mustVerifyEmail, status, progress }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            surname: user.surname,
            email: user.email,
            address: user.address,
            phone_number: user.phone_number,
            profile_image_path: user.profile_image_path,
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"));
    };

    return (
        <>
            <h2 className="h2 text-light forms-settings-title">Informacje</h2>

            <form
                onSubmit={submit}
                className="d-flex flex-column align-items-center"
            >
                <div className="form-edit-row">
                    <div className="form-col inputs-wrapper">
                        <div className="mb-3">
                            <InputLabel htmlFor="name" value="Imię" />
                            <input
                                className="user-settings-input"
                                id="name"
                                type="text"
                                placeholder="Imię"
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
                            <InputLabel htmlFor="surname" value="Nazwisko" />
                            <input
                                className="user-settings-input"
                                id="surname"
                                type="text"
                                placeholder="Nazwisko"
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
                                value="Numer telefonu"
                            />
                            <input
                                className="user-settings-input"
                                id="phone_number"
                                type="tel"
                                placeholder="Numer telefonu"
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
                            <InputLabel htmlFor="address" value="Adres" />
                            <input
                                className="user-settings-input"
                                id="address"
                                type="text"
                                placeholder="Adres"
                                value={data.address || ""}
                                autoComplete="address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            <InputError message={errors.address} />
                        </div>
                    </div>
                    <div className="form-col">
                        <div className="user-image-wrapper mb-5">
                            <div className="outside-ring">
                                {user.profile_image_path == null ? (
                                    <DefaultProfile user={user} />
                                ) : (
                                    <img
                                        src={`/storage/${user.profile_image_path}`}
                                        alt={user.name + user.surname}
                                        className="profile-picture"
                                    />
                                )}
                            </div>
                        </div>
                        <label
                            htmlFor="image_picker"
                            className="image-picker-label"
                        >
                            <p>Wybierz zdjęcie profilowe </p>
                            <FontAwesomeIcon icon={faImage} />
                        </label>
                        <input
                            type="file"
                            id="image_picker"
                            hidden
                            onChange={(e) =>
                                setData("profile_image_path", e.target.files[0])
                            }
                        />

                        <InputError message={errors.profile_image_path} />
                    </div>
                </div>
                {progress && (
                    <div className="mb-3">
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    </div>
                )}
                <button
                    type="submit"
                    className="etp-button ps-5 pe-5 pt-2 pb-2"
                >
                    Zapisz
                </button>
            </form>
        </>
    );
}
