import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';

import back from '../assets/svg/back.svg';


describe('Header', () => {
  it('render Header without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Header left = { <img src = {back} onClick = {e => console.log('Header left clicked') } />}>
        Children
      </Header>, 
      div
    );
  });       
});