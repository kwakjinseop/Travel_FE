import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';
import Seoul from '../../images/seoul.png';
import styled from 'styled-components';

const items = [
    { id: 1, src: Seoul },
    { id: 2, src: Seoul },
    { id: 3, src: Seoul },
];

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
        centerMode: true
    };
      
    return (
        <Slider {...settings}>
                {
                    items.map(item => 
                        <Slide key={item.id} src={item.src}></Slide>
                    )
                }
        </Slider>
            
    );
}

export default ImageSlider;