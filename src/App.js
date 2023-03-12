import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import Virtual from "./Components/Virtual/Virtual";
import Product from "./Components/Product/Product";
import Testimonial from "./Components/Testimonails/testimonial";
import Footer from "./Components/Footer/Footer";

const MyComponent = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Slider/>
            <Virtual/>
            <Product/>
            <Testimonial/>
            <Footer/>
        </>
    );
};

export default MyComponent;
