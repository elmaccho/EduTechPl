import React, { useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faImage, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import InputError from "@/Components/InputError";
import UserProfile from "@/Components/DefaultProfile";

export default function Edit({ user, auth, roles }) {
    const { data, setData, reset, post, errors, processing } = useForm({
        name: user.name || "",
        surname: user.surname || "",
        address: user.address || "",
        phone_number: user.phone_number || "",
        profile_image_path: "",
        about: user.about || "",
        role: user.role || "",
        account_type: user.account_type || "",
    });

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("adminpanel.users.update", user.id), {
            _method: "put",
        });
    };

    return (
        <AdminLayout user={auth}>
            <Head title="Edytuj użytkownika" />
            <h1 className="h1 mb-4">Edytuj użytkownika</h1>
            <div className="row m-0 mb-4">
                <Link
                    className="d-flex gap-2 align-items-center btn btn-primary w-max"
                    href={route("adminpanel.users")}
                >
                    Powrót
                    <FontAwesomeIcon icon={faTurnUp} rotation={270} />
                </Link>
            </div>
            <form onSubmit={submit}>
                <div className="d-flex flex-column align-items-center w-max gap-2 mb-4">
                    <div style={{ width: "200px", height: "200px" }}>
                        {preview ? (
                            <>
                                <img
                                    src={preview}
                                    alt={user.name + " " + user.surname}
                                    className="profile-picture"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "100%" }}
                                />
                            </>
                        ) : (
                            <UserProfile user={user} />
                        )}
                    </div>
                    <input
                        type="file"
                        name=""
                        id="user-photo"
                        hidden
                        onChange={(e) => {
                            setData("profile_image_path", e.target.files[0]);
                            handleImageChange(e);
                        }}
                    />
                    <label htmlFor="user-photo">
                        <p className="btn btn-primary">
                            Zmień zdjęcie <FontAwesomeIcon icon={faImage} />
                        </p>
                    </label>
                    <InputError message={errors.profile_image_path} />
                </div>
                <div className="double-input-row">
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="name">Imię</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Imię"
                            required
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="surname">Nazwisko</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            value={data.surname}
                            onChange={(e) => setData("surname", e.target.value)}
                            placeholder="Nazwisko"
                            required
                        />
                        <InputError message={errors.surname} />
                    </div>
                </div>
                {/* <div className="mb-3 d-flex flex-column">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Email"
                        required
                        disabled
                    />
                    <InputError message={errors.email} />
                </div> */}
                <div className="double-input-row">
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="phone_number">Numer telefonu</label>
                        <input
                            id="phone_number"
                            type="tel"
                            placeholder="Numer telefonu"
                            value={data.phone_number}
                            autoComplete="phone_number"
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            maxLength="9"
                        />
                        <InputError message={errors.phone_number} />
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="address">Adres</label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Adres"
                            value={data.address}
                            autoComplete="address"
                            onChange={(e) => setData("address", e.target.value)}
                        />
                        <InputError message={errors.address} />
                    </div>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="about">Opis</label>
                    <textarea
                        id="about"
                        type="text"
                        placeholder="Opis"
                        value={data.about}
                        onChange={(e) => setData("about", e.target.value)}
                        maxLength="1024"
                    ></textarea>
                    <InputError message={errors.about} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="role">Ranga</label>
                    <select
                        name="role"
                        id="role"
                        onChange={(e) => setData("role", e.target.value)}
                        value={data.role}
                    >
                        <option value={user.role}>{user.role}</option>
                        {roles.map((role) => (
                            <option value={role} key={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.role} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="account_type">Typ konta</label>
                    <select
                        name="account_type"
                        id="account_type"
                        onChange={(e) =>
                            setData("account_type", e.target.value)
                        }
                        value={data.account_type}
                    >
                        <option value={user.account_type}>
                            {user.account_type}
                        </option>
                        <option value="teacher">Nauczyciel</option>
                        <option value="student">Uczeń</option>
                    </select>
                    <InputError message={errors.account_type} />
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={processing}
                    >
                        Zapisz <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
