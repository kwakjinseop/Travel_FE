import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sample from '../../images/SliderSample.png';

const Container = styled.div`
    width: 100%;
    height: 55vh;
    position: relative;
`;

const StyledSlider = styled(Slider)`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(196, 196, 196, 0));
    .slick-dots {
        position: absolute;
        bottom: 3%;
        list-style: none;
        display: block;
        text-align: center;
        padding: 0;
        margin: 0;
        li {
            position: relative;
            display: inline-block;
            margin: 1%;
            padding: 0;
            button:before {
                opacity: 0.8;
                color: #f2f2f2;
            }
        }
        li.slick-active button:before {
            color: rgba(111, 207, 151, 0.8);
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