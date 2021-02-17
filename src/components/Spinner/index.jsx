import React from 'react';

import './Spinner.sass';

import spinner from '../../assets/svg/spinner.svg';

import useWindowDimensions from '../../hooks/useWindowDimensions';


const Spinner = ({ size = 'normal' }) => {
  const {width, height} = useWindowDimensions();

  let style = {};
  switch (size) {
  case 'small':
    style = { width: '35px', height: '35px' };
    break;
  case 'normal':
    style = { width: '70px', height: '70px' };
    break;
  case 'big':
    style = { width: '105px', height: '105px' };
    break;
  }

  return <div className = 'spinner__wrapper' style = {{width, height}}>
    <object style = { style } type = 'image/svg+xml' data = { spinner }></object>
  </div>;
};

export default Spinner;

