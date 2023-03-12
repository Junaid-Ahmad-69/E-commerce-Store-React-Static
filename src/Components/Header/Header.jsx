import React from 'react';
import style from './header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from "react-icons/cg";

const MyComponent = () => {
    return (
        <div className={style.mainHeader}>
            <div className={style.logo}>
                <img src={Logo} alt="logo img"/>
                <span>Amazon</span>
            </div>
            <div className={style.right}>
                <div className={style.menu}>
                    <ul className={style.menu}>
                        <li>Collections</li>
                        <li>Brand</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>Eng</li>
                    </ul>
                </div>
                <input type="text" className={style.search} placeholder="Search" />
                <CgShoppingBag className={style.cart}/>
            </div>
        </div>
    );
};

export default MyComponent;
