import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from '../components/Spinner';


describe('Spinner', () => {
  it('render Spinner without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner/>, div);
  });       
});