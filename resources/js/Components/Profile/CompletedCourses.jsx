import React from "react";

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
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function CompletedCourses() {
    const { t } = useTranslation();

    return (
        <div className="courses-wrapper">
            <div className="cards-wrapper">
                <div className="row text-center mt-5">
                    <h2 className="text-light h1">{t('profile.completed_courses')}</h2>
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
                                    <p>{t('profile.completed')}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="outer-ring">
                                        <div className="perecent-box">100%</div>
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
                                    <p>{t('profile.completed')}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="outer-ring">
                                        <div className="perecent-box">100%</div>
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
                                    <p>{t('profile.completed')}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="outer-ring">
                                        <div className="perecent-box">100%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-card-text">
                                <h3 className="course-card-title">
                                    Podstawy programowania w języku Python
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="#" className="course-card">
                            <div className="course-card-img">
                                <img src={card4img} alt="" />
                                <div className="course-card-img-background">
                                    <p>{t('profile.completed')}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="outer-ring">
                                        <div className="perecent-box">100%</div>
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
                                    <p>{t('profile.completed')}</p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="outer-ring">
                                        <div className="perecent-box">100%</div>
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
    );
}
