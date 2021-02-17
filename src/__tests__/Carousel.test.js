import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from '../components/Carousel';


describe('Carousel', () => {
  it('render Carousel without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel>
      <div><img src = 'fake.img' alt = 'fake image'/></div>
      <div><img src = 'fake.img' alt = 'fake image'/></div>
    </Carousel>, div);
  });       
});