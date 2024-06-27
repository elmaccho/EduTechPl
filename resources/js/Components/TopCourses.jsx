import React from "react";
import "/resources/css/topcourses.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, FreeMode } from "swiper/modules";

import card1img from "/public/img/top courses/biologiamolekularna.png";
import card2img from "/public/img/top courses/strukturydanychialgorytmy.png";
import card3img from "/public/img/top courses/pythonpodstawy.png";
import card4img from "/public/img/top courses/podstawyprojektowania.png";
import card5img from "/public/img/top courses/podstawychemii.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalf,
    faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function TopCourses() {
    return (
        <div className="top-courses-container">
            <div className="row m-0 text-left mb-3">
                <h2 className="text-light text-center h2">Ostatnio na topie</h2>
            </div>
            <div className="cards-wrapper">
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
                        }
                     }}
                >
                    <SwiperSlide>
                        <Link href={route('course.show', 1)} className="top-card">
                            <div className="top-card-img">
                                <img src={card1img} alt="" />
                            </div>
                            <div className="top-card-text">
                                <h3 className="top-card-title">
                                    Biologia molekularna: Podstawy
                                </h3>
                                <div className="top-card-reviews">
                                    <div className="average-rating">4.7</div>
                                    <div className="stars-number">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStarHalfStroke}
                                            className="rating-star-icon"
                                        />
                                    </div>
                                    <div className="reviews-number text-sm">
                                        (200 ocen)
                                    </div>
                                </div>
                                <div className="author-info">
                                    <p className="author-name">
                                        Dr.Paweł Kowalski
                                    </p>
                                    <div className="author-profile-picture"></div>
                                </div>
                                <div className="top-card-more-info">
                                    <div className="duration text-sm">
                                        Czas trwania: 35h
                                    </div>
                                    <div className="number-of-contestants">
                                        <button className="etp-button text-sm">
                                            400 uczestników
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={route('course.show', 1)} className="top-card">
                            <div className="top-card-img">
                                <img src={card2img} alt="" />
                            </div>
                            <div className="top-card-text">
                                <h3 className="top-card-title">
                                    Struktury danych i algorytmy
                                </h3>
                                <div className="top-card-reviews">
                                    <div className="average-rating">4.4</div>
                                    <div className="stars-number">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStarHalfStroke}
                                            className="rating-star-icon"
                                        />
                                    </div>
                                    <div className="reviews-number text-sm">
                                        (180 ocen)
                                    </div>
                                </div>
                                <div className="author-info">
                                    <p className="author-name">
                                        Prof. Barbara Nowak
                                    </p>
                                    <div className="author-profile-picture"></div>
                                </div>
                                <div className="top-card-more-info">
                                    <div className="duration text-sm">
                                        Czas trwania: 30h
                                    </div>
                                    <div className="number-of-contestants">
                                        <button className="etp-button text-sm">
                                            400 uczestników
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={route('course.show', 1)} className="top-card">
                            <div className="top-card-img">
                                <img src={card3img} alt="" />
                            </div>
                            <div className="top-card-text">
                                <h3 className="top-card-title">
                                    Podstawy programowania w języku Python
                                </h3>
                                <div className="top-card-reviews">
                                    <div className="average-rating">4.7</div>
                                    <div className="stars-number">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStarHalfStroke}
                                            className="rating-star-icon"
                                        />
                                    </div>
                                    <div className="reviews-number text-sm">
                                        (250 ocen)
                                    </div>
                                </div>
                                <div className="author-info">
                                    <p className="author-name">
                                        Dr. Michał Kowalski
                                    </p>
                                    <div className="author-profile-picture"></div>
                                </div>
                                <div className="top-card-more-info">
                                    <div className="duration text-sm">
                                        Czas trwania: 20h
                                    </div>
                                    <div className="number-of-contestants">
                                        <button className="etp-button text-sm">
                                            500 uczestników
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link href={route('course.show', 1)} className="top-card">
                            <div className="top-card-img">
                                <img src={card4img} alt="" />
                            </div>
                            <div className="top-card-text">
                                <h3 className="top-card-title">
                                    Podstawy projektowania graficznego
                                </h3>
                                <div className="top-card-reviews">
                                    <div className="average-rating">4.7</div>
                                    <div className="stars-number">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStarHalfStroke}
                                            className="rating-star-icon"
                                        />
                                    </div>
                                    <div className="reviews-number text-sm">
                                        (170 ocen)
                                    </div>
                                </div>
                                <div className="author-info">
                                    <p className="author-name">
                                        Dr. Adam Kowalski
                                    </p>
                                    <div className="author-profile-picture"></div>
                                </div>
                                <div className="top-card-more-info">
                                    <div className="duration text-sm">
                                        Czas trwania: 25h
                                    </div>
                                    <div className="number-of-contestants">
                                        <button className="etp-button text-sm">
                                            350 uczestników
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={route('course.show', 1)} className="top-card">
                            <div className="top-card-img">
                                <img src={card5img} alt="" />
                            </div>
                            <div className="top-card-text">
                                <h3 className="top-card-title">
                                    Podstawy Chemii
                                </h3>
                                <div className="top-card-reviews">
                                    <div className="average-rating">4.6</div>
                                    <div className="stars-number">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="rating-star-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStarHalfStroke}
                                            className="rating-star-icon"
                                        />
                                    </div>
                                    <div className="reviews-number text-sm">
                                        (110 ocen)
                                    </div>
                                </div>
                                <div className="author-info">
                                    <p className="author-name">
                                        Dr. Paweł Kowalski
                                    </p>
                                    <div className="author-profile-picture"></div>
                                </div>
                                <div className="top-card-more-info">
                                    <div className="duration text-sm">
                                        Czas trwania: 35h
                                    </div>
                                    <div className="number-of-contestants">
                                        <button className="etp-button text-sm">
                                            210 uczestników
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
