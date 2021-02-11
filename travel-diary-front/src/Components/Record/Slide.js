import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
    width: 100%;
    height: 60vh;
    position: relative;
`;

function Slide({ image }) {
    return (
        <>
        <IMG src={image} />
        </>
    );
}

export default Slide;