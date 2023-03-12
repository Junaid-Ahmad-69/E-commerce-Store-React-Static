import React from 'react';
import style from './virtual.module.css';
import Shade from '../../assets/shade.png'
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png"
import After from "../../assets/after.png"

const Virtual = () => {
    return (
        <div className={style.virtualContainer}>
            <div className={style.virtualLeft}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong shade again!</span>
                <span>Try Now! </span>
                <img src={Shade} alt="shadow"/>
            </div>
            <div className={style.virtualRight}>
                <div className={style.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After}></ReactCompareImage>
                </div>
            </div>


        </div>
    );
};

export default Virtual;
