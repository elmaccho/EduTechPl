import React, { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

import "/resources/css/Profile/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

import UserProfile from "@/Components/DefaultProfile";
import About from "@/Components/Profile/About";
import CompletedCourses from "@/Components/Profile/CompletedCourses";

export default function Index({ user }) {
    const [content, setContent] = useState("profile");
    console.log(user);
    return (
        <MainLayout auth={user}>
            <Head title={`Profil ${user.name} ${user.surname}`} />
            <div className="user-main-data-container">
                <div className="profile-row">
                    <div className="user-image-profile">
                        <div className="outside-ring">
                            <UserProfile user={user} />
                        </div>
                    </div>
                    <div className="user-name-surname">
                        <h2 className="text-light ">
                            <b>
                                {user.name} {user.surname}
                            </b>
                        </h2>
                        <h3 className="text-light">
                            {user.accountType}
                        </h3>
                    </div>
                </div>
                <nav className="profile-nav">
                    <button
                        href="#"
                        className={`nav-profile-button ${
                            content == "profile" ? "profile-nav-active" : ""
                        }`}
                        onClick={() => setContent("profile")}
                    >
                        Profil
                    </button>
                    {user.isTeacher && (
                        <button
                            href="#"
                            className={`nav-profile-button ${
                                content == "courses" ? "profile-nav-active" : ""
                            }`}
                            onClick={() => setContent("courses")}
                        >
                            Kursy
                        </button>
                    )}
                    <button
                        href="#"
                        className={`nav-profile-button ${
                            content == "completed_courses"
                                ? "profile-nav-active"
                                : ""
                        }`}
                        onClick={() => setContent("completed_courses")}
                    >
                        Ukończone kursy
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${
                            content == "wish_list" ? "profile-nav-active" : ""
                        }`}
                        onClick={() => setContent("wish_list")}
                    >
                        Lista życzeń
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${
                            content == "notes" ? "profile-nav-active" : ""
                        }`}
                        onClick={() => setContent("notes")}
                    >
                        Notatki
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${
                            content == "reviews" ? "profile-nav-active" : ""
                        }`}
                        onClick={() => setContent("reviews")}
                    >
                        Recenzje
                    </button>
                    {user.isTeacher && (
                        <Link
                            href="#"
                            className="nav-profile-button text-light d-flex gap-2 align-items-center text-lg ml-auto "
                        >
                            <FontAwesomeIcon icon={faCommentDots} />
                            <p>Umów spotkanie</p>
                        </Link>
                    )}
                </nav>

                {content == "profile" && <About user={user} />}
                {content == "completed_courses" && (
                    <CompletedCourses />
                )}
            </div>
        </MainLayout>
    );
}
