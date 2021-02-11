import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
    width: 100%;
    height: 40vh;
`;

function Slide({ img }) {
    return (
        <IMG src={img} />
    );
}

export default Slide;