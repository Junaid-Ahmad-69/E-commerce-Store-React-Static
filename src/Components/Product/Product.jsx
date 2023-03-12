import React, {useState} from 'react';
import style from "./product.module.css"
import Plane from '../../assets/plane.png'
import {ProductsData} from "../../data/products";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const Product = () => {
    const [parent] = useAutoAnimate();
    const [MenuData, setMenuData] = useState(ProductsData);
    const filterData = (type) => {
        setMenuData(ProductsData.filter((productFilter) => {
            return (
                productFilter.type === type
            )
        }))
    }

    return (
        <div className={style.productContainer}>
            <img src={Plane} alt="plane-image"/>
            <h1>Our Featured Products</h1>


            <div className={style.products}>
                <ul className={style.menu}>
                    <li onClick={()=>setMenuData(ProductsData)}>All</li>
                    <li onClick={()=>filterData("skin care")}>Skin Care</li>
                    <li onClick={()=>filterData("conditioner")}>Conditioners</li>
                    <li onClick={()=>filterData("foundation")}>Foundations</li>
                </ul>
                <div className={style.list} ref={parent}>
                    {
                        MenuData.map((menuItem) => {
                            return (
                                <div className={style.product}>
                                    <div className={style.productLeft}>
                                        <div className={style.productName}>
                                            <span>{menuItem.name}</span>
                                            <span>{menuItem.detail}</span>
                                        </div>
                                        <span>{menuItem.price}$</span>
                                        <div>Shop Now</div>
                                    </div>
                                    <img src={menuItem.img} alt="menu-image" className={style.productImage}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
