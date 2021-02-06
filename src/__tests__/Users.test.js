import React from 'react';
import ReactDOM from 'react-dom';

import Users from '../pages/Users';


describe('Users', () => {
  it('render Users without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Users/>, div);
  });       
});