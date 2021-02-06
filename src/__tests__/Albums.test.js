import React from 'react';
import ReactDOM from 'react-dom';

import Albums from '../pages/Albums';


describe('Albums', () => {
  it('render Albums without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Albums/>, div);
  });       
});