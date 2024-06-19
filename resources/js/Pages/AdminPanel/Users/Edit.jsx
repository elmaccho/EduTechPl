import React from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import InputError from "@/Components/InputError";

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

    const submit = (e) => {
        e.preventDefault();

        post(route("adminpanel.users.update", user.id), {
            _method: "put",
        });
    };

    return (
        <AdminLayout user={auth}>
            <Head title="Użytkownicy" />
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
                        onChange={(e) =>
                            setData("address", e.target.value)
                        }
                    />
                    <InputError message={errors.address} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="about">Opis</label>
                    <textarea
                        id="about"
                        type="text"
                        placeholder="Opis"
                        value={data.about}
                        onChange={(e) =>
                            setData("about", e.target.value)
                        }
                        maxLength="1024"
                    >
                    </textarea>
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
                        Zapisz
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
