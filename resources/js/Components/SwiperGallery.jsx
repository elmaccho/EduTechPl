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

export default function SwiperGallery({ sliders }) {
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
            {sliders && sliders.map((slider, index) => (
                <SwiperSlide key={slider.id}>
                    <img src={`/storage/${slider.image_path}`} alt={slider + index} />
                    <div className="slide-info slide1-info">
                        <p className="h4">
                            <b>
                                {slider.title}
                            </b>
                        </p>
                        <p>{slider.text1}</p>
                        <p>{slider.text2}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
