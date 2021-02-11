import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sample from '../../images/SliderSample.png';
import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
`;
function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
    };
    
    const items = [
        { id: 1, src: Sample },
        { id: 2, src: Sample },
        { id: 3, src: Sample },
    ];
    
    return (
        <Container>
        <Slider {...settings}>
                {
                    items.map(item => 
                        <Slide key={item.id} image={item.src}></Slide>
                    )
                }
        </Slider>
        </Container>
            
    );
}

export default ImageSlider;