import React from 'react';
import ReactDOM from 'react-dom';

import Photos from '../pages/Photos';


describe('Photos', () => {
  it('render Photos without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Photos/>, div);
  });       
});