import React from 'react';
import ReactDOM from 'react-dom';

import About from '../pages/About';


describe('About', () => {
  it('render About without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About/>, div);
  });       
});