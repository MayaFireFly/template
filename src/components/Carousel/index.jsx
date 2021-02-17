import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.sass';

import { Carousel as CarouselModule } from 'react-responsive-carousel';


const Carousel = ({children}) => {
  return <div className = 'carousel__wrapper'>
    <CarouselModule infiniteLoop useKeyboardArrows autoPlay>
      {children}
    </CarouselModule>
  </div>;
};

export default Carousel;