import React, { useState } from "react";

import { usePage, useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import UserProfile from "../DefaultProfile";

import "/resources/css/Profile/personalinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function PersonalInfo({ mustVerifyEmail, status, progress }) {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            surname: user.surname,
            email: user.email,
            address: user.address,
            phone_number: user.phone_number,
            profile_image_path: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"), {
            _method: "put",
        });
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
                                {preview ? (
                                    <>
                                        <img
                                            src={preview}
                                            alt={user.name + " " + user.surname}
                                            className="profile-picture"
                                        />
                                        {console.log(preview)}
                                    </>
                                ) : (
                                    <UserProfile user={user}/>
                                )
                            }
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
                    Zapisz
                </button>
            </form>
        </>
    );
}
