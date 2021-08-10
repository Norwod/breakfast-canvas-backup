import React from 'react';
import { Image } from '@sberdevices/plasma-ui';
import FluidImg from '../FluidImg'

const CarouselImageItem = ({ src }) => {
    return <FluidImg style={{marginRight: '1%', maxHeight: '300px', maxWidth: '300px', marginTop: "3%" }} src={src} />
};

export default CarouselImageItem;