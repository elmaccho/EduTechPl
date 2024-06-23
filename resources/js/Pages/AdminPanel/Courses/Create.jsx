import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { faImage, faPlus, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Create({ auth, categories }) {
    const { data, setData, post, errors } = useForm({
        image_path: "",
        title: "",
        teacher_id: "",
        description: "",
        category_id: "",
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

        post(route("adminpanel.course.store"));
    };

    return (
        <AdminLayout user={auth}>
            <Head title="Dodaj kategorię" />
            <h1 className="h1 mb-4">Dodaj kategorię</h1>
            <div className="row m-0 mb-5">
                <Link
                    className="d-flex gap-2 align-items-center btn btn-primary w-max"
                    href={route("adminpanel.courses")}
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
                        placeholder="Nazwa kategorii"
                        required
                    />
                    <InputError message={errors.title} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="description">Opis</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Nazwa kategorii"
                        required
                    />
                    <InputError message={errors.description} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="author">Autor</label>
                    <select
                        name="author"
                        id="author"
                        required
                        onChange={(e) => setData("teacher_id", e.target.value)}
                    >
                        <option value="">Autor</option>
                        <option value={auth.id}>Ty</option>
                    </select>
                    <InputError message={errors.teacher_id} />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="category_id">Kategoria</label>
                    <select
                        name=""
                        id="category_id"
                        required
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        <option value="">Kategoria</option>
                        {categories.map((category, index) => (
                            <option value={category.id} key={category.id}>
                                {index + 1}. {category.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.category_id} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Dodaj
                </button>
            </form>
        </AdminLayout>
    );
}
