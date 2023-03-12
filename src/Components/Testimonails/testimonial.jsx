import React from 'react';
import style from "./testmonials.module.css"
import Hero from "../../assets/testimonialHero.png"
import {Swiper, SwiperSlide} from "swiper/react";
import {TestimonialsData} from "../../data/testimonials";

const Testimonial = () => {
    return (
        <div className={style.mainTestimonial}>
            <div className={style.testimonialWrapper}>
                <div className={style.testimonialContainer}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man Children rejoiced.</span>
                </div>
                <img src={Hero} alt="feedback-image"/>

                <div className={style.testimonialContainer}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>

            <div className={style.review}>Reviews</div>

            <div className={style.carousal}>
                <Swiper
                slidesPerGroup={1}
                slidesPerView={3}
                spaceBetween={20}
                className={style.testimonialCarousal}
                >
                    {
                        TestimonialsData.map((carousel) => {
                            return (
                                <SwiperSlide>
                                    <div className={style.testimonial}>
                                        <img src={carousel.image} alt="feedback-image"/>
                                        <span>{carousel.comment}</span>
                                        <hr/>
                                        <span>{carousel.name}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>


        </div>
    );
}
    ;

    export default Testimonial;
