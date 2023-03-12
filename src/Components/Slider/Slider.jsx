import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper';
//Import Swiper Css
import 'swiper/css';
import 'swiper/css/navigation';
import "./slider.css"
import {SliderProducts} from "../../data/products";

const Slider = () => {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination]}
                className="mySwiper"
                loop={true}
                navigation={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
            >
                {SliderProducts.map((slides) => (
                    <SwiperSlide key={slides.img}>
                        <div className="left-slider">
                            <div className="slider-name">
                                <span>{slides.name}</span>
                                <span>{slides.detail}</span>
                            </div>
                            <span>{slides.price}$</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slides.img} alt="product img" className="slider-product"/>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;
