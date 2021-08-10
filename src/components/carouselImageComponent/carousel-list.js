import React from 'react';
import { Carousel } from '@sberdevices/plasma-ui';

import CarouselImageItem from './carousel-image-item';

const CarouselList = ({ srcs }) => {

  const elements = srcs.map((item) => {
    return (
      <>
        <CarouselImageItem {...item } />
      </>
    );
  });

  return (
    <>
    <Carousel>
      { elements }
      </Carousel>
    </>
  );
};

export default CarouselList;
