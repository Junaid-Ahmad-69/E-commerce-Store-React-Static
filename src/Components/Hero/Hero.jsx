import React from 'react';
import style from './hero.module.css'
import HeroImage from '../../assets/hero.png'
import {BsArrowRight} from "react-icons/bs";
import {RiShoppingBagFill} from "react-icons/ri";

const Hero = () => {
    return (
        <div className={style.container}>

            {/*Left Side*/}
            <div className={style.bothSides}>
                <span className={style.heroContent}>Skin Protect Cream</span>
                <div className={style.heroDesc}>
                    <span>Trendy Collection</span>
                    <span>Speedily say has suitable disposal and boy. Exercise join may children rejoiced.</span>
                </div>
            </div>

            {/*Middle Side*/}
            <div className={style.wrapper}>
                <div className={style.blueCircle}></div>
                <img src={HeroImage} alt='girl with cap' width={600}/>

                <div className={style.heroCart}>
                    <RiShoppingBagFill/>

                    <div className={style.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                            <BsArrowRight/>
                        </div>

                    </div>
                </div>
            </div>

            {/*Right Side*/}
            <div className={style.bothSides}>
                <div className={style.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={style.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>

            </div>


        </div>
    );
};

export default Hero;
