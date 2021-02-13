import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sample from '../../images/SliderSample.png';

const Container = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
`;

const StyledSlider = styled(Slider)`
    .slick-dots {
        position: absolute;
        bottom: 10px;
        list-style: none;
        display: block;
        text-align: center;
        padding: 0;
        margin: 0;
        li {
            position: relative;
            display: inline-block;
            margin: 5px;
            padding: 0;
            button:before {
                color: #ffffff;
            }
        }
        li.slick-active button:before {
            color: #6fcf97 !important;
        }
    }
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
            <StyledSlider {...settings}>
                    {
                        items.map(item => 
                            <Slide key={item.id} image={item.src}></Slide>
                        )
                    }
            </StyledSlider>
        </Container>
            
    );
}

export default ImageSlider;