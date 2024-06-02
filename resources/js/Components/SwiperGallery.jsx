import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/resources/css/swiper.css";

import { Pagination, Navigation } from "swiper/modules";

import slide1 from "/public/img/swiper gallery/pexels-tirachard-kumtanom-112571-733856 1.png";
import slide2 from "/public/img/swiper gallery/pexels-george-dolgikh-551816-1310532.jpg";
import slide3 from "/public/img/swiper gallery/pexels-divinetechygirl-1181233.jpg";

export default function SwiperGallery({}) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-5"
        >
            <SwiperSlide>
                <img src={slide1} alt="slide1" />
                <div className="slide-info slide1-info">
                    <p className="h4">
                        <b>
                            Zaufało nam już ponad 200 000 studentów z całego
                            świata.
                        </b>
                    </p>
                    <p>Zacznij naukę już dziś!</p>
                    <p>Z kodem <b>tryMe</b> 30% taniej na pierwszy kurs</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="slide2" />
                <div className="slide-info slide2-info">
                    <p className="h4">
                        <b>
                            Ucz się w dowolnym miejscu i czasie!
                        </b>
                    </p>
                    <p>Dostęp do materiałów 24/7 na komputerze, tablecie lub smartfonie.</p>
                    <p>Indywidualne podejście i wsparcie na każdym etapie nauki.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3" />
                <div className="slide-info slide3-info">
                    <p className="h4">
                        <b>
                            Zaufało nam już ponad 200 000 studentów z całego
                            świata.
                        </b>
                    </p>
                    <p>Zacznij naukę już dziś!</p>
                    <p>Z kodem <b>tryMe</b> 30% taniej na pierwszy kurs</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
