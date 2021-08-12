import React from 'react';
import styled from 'styled-components';

interface Image {
    src: string;
}

const FluidImg = styled.img<Image>`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const Img: React.FC<Image> = ({ ...props }) => {
    return <FluidImg {...props} />;
};

export default Img;
