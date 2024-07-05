import React, { useState } from 'react';
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour } from '../assets/index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                left: "10px",
                zIndex: 1, 
                top:"10rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
            }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                right: "10px",
                top:"10rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
            }}
            onClick={onClick}
        />
    );
};

function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex); // Update active index on slide change
        }
    };

    return (
        <div className='w-full h-80 overflow-hidden'>
            <div className="slider-container w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgThree} alt="Banner 3" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgOne} alt="Banner 1" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="Banner 2" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="Banner 4" className="w-full h-full object-cover" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
