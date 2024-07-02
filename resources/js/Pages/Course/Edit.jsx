import React from "react";

import MainLayout from "@/Layouts/MainLayout";

import "/resources/css/Courses/edit.css";
import { Head, useForm } from "@inertiajs/react";
import DraftEditor from "@/Components/DraftEditor";

export default function Edit({ auth, course, languages, levels }) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            image_path: course.image_path || "",
            title: course.title,
            price: 0,
            duration: 0,
            level: "",
            language: "",
            student_count: 0,
            rating_count: 0,
            teacher_id: course.teacher_id,
            category_id: course.category_id,
            description: "",
            rating_average: 0,
            active: 0,
        });

    return (
        <MainLayout auth={auth}>
            <Head title={course.title}/>
            <div className="course-edit-wrapper p-4">
                <div className="row mb-5">
                    <h2 className="text-light h1">{course.title}</h2>
                    <hr className="text-light" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="text-light">
                        Title
                    </label>
                    <input
                        className="form-control"
                        id="title"
                        type="text"
                        placeholder="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="language" className="text-light">
                        Język
                    </label>
                    <select
                        name="language"
                        id="language"
                        onChange={(e) => setData("language", e.target.value)}
                        className="form-control"
                    >
                        <option value="">Wybierz język</option>
                        {languages.map((language) => (
                            <option value={language} key={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="level" className="text-light">
                        Poziom trudności
                    </label>
                    <select
                        name="level"
                        id="level"
                        className="form-control"
                        onChange={(e) => setData("level", e.target.value)}
                    >
                        <option value="">Poziom trudności</option>
                        {levels.map((level) => (
                            <option value={level} key={level}>
                                {level}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="text-light">
                        Cena
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Cena"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        min={0}
                        max={9999}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                </div>
            </div>
        </MainLayout>
    );
}
