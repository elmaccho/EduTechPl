import React, { useState } from "react";

import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import "/resources/css/Courses/create.css";
import InputError from "@/Components/InputError";

export default function Create({ auth, categories }) {
    const { t } = useTranslation();

    const [preview, setPreview] = useState(null);

    const handleSetPreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            image_path: "",
            title: "",
            price: 0,
            duration: 0,
            level: "",
            language: "",
            student_count: 0,
            rating_count: 0,
            teacher_id: auth.id,
            category_id: "",
            description: "",
            rating_average: 0,
            active: 0,
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("course.store"));
    };

    return (
        <MainLayout auth={auth}>
            <Head title="Utwórz kurs" />

            <div className="create-course min-h-screen">
                <form onSubmit={submit}>
                    <div className="form-row mb-3">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="create-input"
                            placeholder={t("courses.title")}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <InputError message={errors.title} />
                    </div>
                    <div className="form-row mb-3">
                        <select name="" id="" className="create-input" onChange={(e) => setData("category_id", e.target.value)}>
                            <option value="">
                                {t("courses.choose_category")}
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.category_id} />
                    </div>
                    <div className="form-row mb-3">
                        <label htmlFor="thumbnail" className="thumbnail-label">
                            {t("courses.add_thumbnail")}{" "}
                            <FontAwesomeIcon icon={faImage} />
                        </label>
                        <input
                            type="file"
                            name=""
                            id="thumbnail"
                            hidden
                            onChange={(e) => {
                                handleSetPreview(e);
                                setData("image_path", e.target.files[0])
                            }}
                        />
                        <InputError message={errors.image_path} />
                    </div>
                    <div className="form-row mb-3">
                        {preview && (
                            <img
                                className="thumbnail-preview"
                                src={preview}
                                alt=""
                            />
                        )}
                    </div>
                    <div className="form-row">
                        <button type="submit" className="etp-button ps-5 pe-5">
                            {t("buttons.next")}
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
