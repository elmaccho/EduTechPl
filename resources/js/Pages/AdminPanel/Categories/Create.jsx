import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { faImage, faPlus, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        image_path: "",
    });

    const [preview, setPreview] = useState(null);

    const handleSetPreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("adminpanel.categories.store"));
    };
    return (
        <AdminLayout user={auth}>
            <Head title="Dodaj kategorię" />
            <h1 className="h1 mb-4">Dodaj kategorię</h1>
            <div className="row m-0 mb-5">
                <Link
                    className="d-flex gap-2 align-items-center btn btn-primary w-max"
                    href={route("adminpanel.categories")}
                >
                    Powrót
                    <FontAwesomeIcon icon={faTurnUp} rotation={270} />
                </Link>
            </div>
            <form onSubmit={submit}>
                <div className="d-flex flex-column align-items-center w-max gap-2 mb-4">
                    <input
                        type="file"
                        name=""
                        id="category-image"
                        hidden
                        onChange={(e) => {
                            setData("image_path", e.target.files[0]);
                            handleSetPreview(e);
                        }}
                    />
                    <label
                        htmlFor="category-image"
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "220px",
                            height: "220px",
                            border: "5px dashed #0D6EFD",
                            borderRadius: "20px",
                            cursor: "pointer",
                            overflow: "hidden",
                        }}
                    >
                        {preview ? (
                            <img src={preview} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                        ) : (
                            <p className="d-flex flex-column">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    style={{
                                        color: "#0D6EFD",
                                        fontSize: "70px",
                                    }}
                                />
                                Dodaj zdjęcie
                            </p>
                        )}
                    </label>
                    <InputError message={errors.image_path} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Nazwa kategorii"
                        required
                    />
                    <InputError message={errors.name} />
                </div>
                <button type="submit" className="btn btn-primary">Zapisz</button>
            </form>
        </AdminLayout>
    );
}
