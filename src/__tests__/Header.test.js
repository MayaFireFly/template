import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';


describe('Header', () => {
  it('render Header without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header>Children</Header>, div);
  });       
});