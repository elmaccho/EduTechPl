import React, { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

import "/resources/css/Profile/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/resources/css/swiper.css";

import { Navigation, FreeMode } from "swiper/modules";

import card1img from "/public/img/top courses/biologiamolekularna.png";
import card2img from "/public/img/top courses/strukturydanychialgorytmy.png";
import card3img from "/public/img/top courses/pythonpodstawy.png";
import card4img from "/public/img/top courses/podstawyprojektowania.png";
import card5img from "/public/img/top courses/podstawychemii.png";
import UserProfile from "@/Components/DefaultProfile";

export default function Index({ auth, user}) {
    const [content, setContent] = useState("profile");
    return (
        <MainLayout auth={auth} user={user}>
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
                        {user.isTeacher && (
                            <h3 className="text-light">Nauczyciel</h3>
                        )}
                        {user.isStudent && (
                            <h3 className="text-light">Uczeń</h3>
                        )}
                    </div>
                </div>
                <nav className="profile-nav">
                    <button
                        href="#"
                        className={`nav-profile-button ${content == 'profile' ? 'profile-nav-active' : ''}`}
                        onClick={() => setContent("profile")}
                    >
                        Profil
                    </button>
                    {user.isTeacher && (
                        <button
                            href="#"
                            className={`nav-profile-button ${content == 'courses' ? 'profile-nav-active' : ''}`}
                            onClick={() => setContent("courses")}
                        >
                            Kursy
                        </button>
                    )}
                    <button
                        href="#"
                        className={`nav-profile-button ${content == 'completed_courses' ? 'profile-nav-active' : ''}`}
                        onClick={() => setContent("completed_courses")}
                    >
                        Ukończone kursy
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${content == 'wish_list' ? 'profile-nav-active' : ''}`}
                        onClick={() => setContent("wish_list")}
                    >
                        Lista życzeń
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${content == 'notes' ? 'profile-nav-active' : ''}`}
                        onClick={() => setContent("notes")}
                    >
                        Notatki
                    </button>
                    <button
                        href="#"
                        className={`nav-profile-button ${content == 'reviews' ? 'profile-nav-active' : ''}`}
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

                {content == "profile" && (
                    <div className="about-wrapper">
                        <div className="row m-0">
                            <p className="text-light h3">
                                <b>O mnie</b>
                            </p>
                        </div>
                        <div className="row m-0">
                            <p className="text-light">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Amet quod recusandae incidunt,
                                molestias similique error sapiente, repudiandae
                                in, aliquid aliquam repellat voluptates adipisci
                                magni laboriosam eaque fuga ab sed atque
                                eligendi harum deserunt. Laborum ex cum
                                obcaecati culpa temporibus? Suscipit a pariatur,
                                quod doloremque, quam dolores veritatis fuga
                                ipsam et dolorum maiores quisquam labore iusto
                                aliquid quia unde, laboriosam eum exercitationem
                                hic voluptate dolorem reprehenderit! Laboriosam
                                adipisci nostrum, impedit nemo possimus cumque
                                aliquam qui deserunt iusto sunt voluptatibus
                                saepe nesciunt dignissimos aliquid accusamus
                                ullam id pariatur cupiditate deleniti corrupti
                                provident repellendus error labore veniam!
                                Repudiandae laboriosam cupiditate quod,
                                excepturi, quaerat non dolore cumque modi ipsa
                                officiis eveniet placeat veniam. Eius quam
                                beatae accusamus mollitia. Neque similique
                                expedita libero voluptate cum.
                            </p>
                        </div>
                        <div className="row m-0"></div>
                    </div>
                )}
                {content == "completed_courses" && (
                    <div className="courses-wrapper">
                        <div className="cards-wrapper">
                            <div className="row text-center mt-5">
                                <h2 className="text-light h1">Ukończone kursy</h2>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                navigation={true}
                                freeMode={true}
                                modules={[FreeMode, Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    880: {
                                        slidesPerView: 3,
                                    },
                                    1470: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <Link href="#" className="course-card">
                                        <div className="course-card-img">
                                            <img src={card1img} alt="" />
                                            <div className="course-card-img-background">
                                                <p>Ukończono!</p>
                                            </div>
                                            <div className="progress-wrapper">
                                                <div className="outer-ring">
                                                    <div className="perecent-box">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-card-text">
                                            <h3 className="course-card-title">
                                                Biologia molekularna: Podstawy
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Link href="#" className="course-card">
                                        <div className="course-card-img">
                                            <img src={card2img} alt="" />
                                            <div className="course-card-img-background">
                                                <p>Ukończono!</p>
                                            </div>
                                            <div className="progress-wrapper">
                                                <div className="outer-ring">
                                                    <div className="perecent-box">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-card-text">
                                            <h3 className="course-card-title">
                                                Struktury danych i algorytmy
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Link href="#" className="course-card">
                                        <div className="course-card-img">
                                            <img src={card3img} alt="" />
                                            <div className="course-card-img-background">
                                                <p>Ukończono!</p>
                                            </div>
                                            <div className="progress-wrapper">
                                                <div className="outer-ring">
                                                    <div className="perecent-box">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-card-text">
                                            <h3 className="course-card-title">
                                                Podstawy programowania w języku
                                                Python
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Link href="#" className="course-card">
                                        <div className="course-card-img">
                                            <img src={card4img} alt="" />
                                            <div className="course-card-img-background">
                                                <p>Ukończono!</p>
                                            </div>
                                            <div className="progress-wrapper">
                                                <div className="outer-ring">
                                                    <div className="perecent-box">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-card-text">
                                            <h3 className="course-card-title">
                                                Podstawy projektowania graficznego
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Link href="#" className="course-card">
                                        <div className="course-card-img">
                                            <img src={card5img} alt="" />
                                            <div className="course-card-img-background">
                                                <p>Ukończono!</p>
                                            </div>
                                            <div className="progress-wrapper">
                                                <div className="outer-ring">
                                                    <div className="perecent-box">
                                                        100%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-card-text">
                                            <h3 className="course-card-title">
                                                Podstawy Chemii
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
