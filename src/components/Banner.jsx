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
            style={{ ...style, display: "block", left: "30px", zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", right: "30px", zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%"  }}
            onClick={onClick}
        />
    );
};

function Banner() {

    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true, // Enable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow  />,
        nextArrow: <CustomNextArrow />,
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "50px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ul style={{ 
                    display: "flex",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    gap: "4px"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: activeIndex === i ? "#f3a847" : "#ccc", // Yellow for active, Grey for inactive
                    cursor: "pointer"
                }}
            >
            </div>
        ),
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex); // Update active index on slide change
        }
    };

    return (
        <div className='w-full overflow-hidden'>
            <div className="slider-container w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgThree} alt="Banner 3" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={bannerImgOne} alt="Banner 1" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="Banner 2" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="Banner 4" className="w-full h-auto" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
