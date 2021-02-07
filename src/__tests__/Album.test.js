import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Album from '../pages/Album';
import store from '../store';


describe('Album', () => {
  it('render Album without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider store = {store}><Album/></ReduxProvider>, div);
  });       
});