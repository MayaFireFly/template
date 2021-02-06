import React from 'react';
import './Header.sass';


const Header = ({ left, children }) => {
  return(
    <div className = 'header'>
      <div className = 'header__left'>{left}</div>
      <div className = 'header__title'>{children}</div>
    </div>
  );
};

export default Header;
