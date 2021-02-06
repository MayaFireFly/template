import React from 'react';
import { useHistory } from 'react-router-dom';

import './Photos.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';


const Photos = () => {
  const history = useHistory();

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => history.goBack() } />}
      >
        Photos
      </Header>

      <div className = 'photos'>
      </div>
    </div>
  );
};

export default Photos;
