import React from 'react';
import spinner from '../../assets/svg/spinner.svg';


const Spinner = ({ size = 'small' }) => {
  let style = {};
  if (size === 'small') {
    style = { width: '70px', height: '70px' };
  }

  return(
    <object style={style} type="image/svg+xml" data={spinner}></object>
  );
};

export default Spinner;

