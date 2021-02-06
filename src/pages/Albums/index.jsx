import React from 'react';
import { useHistory } from 'react-router-dom';

import './Albums.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';


const Albums = () => {
  const history = useHistory();

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => history.goBack() } />}
      >
        Albums
      </Header>

      <div className = 'albums'>
      </div>
    </div>
  );
};

export default Albums;
