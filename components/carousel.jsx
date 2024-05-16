"use client";
import React, { useEffect } from 'react';
import { Carousel } from "flowbite-react";




const MyCarousel = () => {
    return (
        <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 ">
            <Carousel slideInterval={3000}>
                <img src="sala.jpg" alt="..." />
                <img src="moni.jpg" alt="..." />
                <img src="sala.jpg" alt="..." />
                <img src="moni.jpg" alt="..." />
                <img src="sala.jpg" alt="..." />
            </Carousel>
        </div>
    );
};
export default MyCarousel;