import React, { useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import { Head, Link, useForm } from "@inertiajs/react";

import { faCheck, faPlus, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputError from "@/Components/InputError";

export default function Edit({ auth }) {
    const { data, setData, reset, post, errors, processing } = useForm({
        title: "",
        text1: "",
        text2: "",
        displayed: "",
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

        post(route("adminpanel.slider.store"));
    };

    return (
        <AdminLayout user={auth}>
            <Head title="Edytuj slider" />
            <h1 className="h1 mb-4">Utwórz slider</h1>
            <div className="row m-0 mb-4">
                <Link
                    className="d-flex gap-2 align-items-center btn btn-primary w-max"
                    href={route("adminpanel.slider")}
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
                        id="slider-image"
                        hidden
                        onChange={(e) => {
                            setData("image_path", e.target.files[0]);
                            handleSetPreview(e);
                        }}
                    />
                    <label
                        htmlFor="slider-image"
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
                            <img
                                src={preview}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
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
                    <label htmlFor="title">Tytuł</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Tytuł slidera"
                        required
                    />
                    <InputError message={errors.title} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="text1">Tekst 1</label>
                    <input
                        type="text"
                        name="text1"
                        id="text1"
                        onChange={(e) => setData("text1", e.target.value)}
                        placeholder="Tekst 1"
                    />
                    <InputError message={errors.text1} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="text2">Tekst 2</label>
                    <input
                        type="text"
                        name="text2"
                        id="text2"
                        onChange={(e) => setData("text2", e.target.value)}
                        placeholder="Tekst 2"
                    />
                    <InputError message={errors.text2} />
                </div>
                <div className="mb-3">
                    <label htmlFor="displayed" className="me-3">
                        Wyświetlić
                    </label>
                    <select
                        name=""
                        id="displayed"
                        onChange={(e) => setData("displayed", e.target.value)}
                        required
                    >
                        <option value="">----</option>
                        <option value="0">Nie - 0</option>
                        <option value="1">Tak - 1</option>
                    </select>
                    <InputError message={errors.displayed} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Utwórz
                </button>
            </form>
        </AdminLayout>
    );
}
