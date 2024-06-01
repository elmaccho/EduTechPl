import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/resources/css/swiper.css";

import { Pagination, Navigation } from "swiper/modules";

import slide1 from "/public/img/swiper gallery/pexels-tirachard-kumtanom-112571-733856 1.png";

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
                <img src={slide1} alt="" />
                <div className="slide1-info">
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
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
}
