import React from 'react';
import { useHistory } from 'react-router-dom';

import './Main.sass';

import Header from '../../components/Header';

import { routes } from '../../constants';


const Main = () => {
  const history = useHistory();

  return(
    <div>
      <Header left = ''>
        <p>Main</p>
      </Header>

      <div className = 'main'>
        <div className = 'main__row' onClick = {e => {history.push(routes.users.base);}}>Users</div>
        <div className = 'main__row' onClick = {e => history.push(routes.albums.base)}>Albums</div>
        <div className = 'main__row' onClick = {e => history.push(routes.photos.base)}>Photos</div>
      </div>
    </div>
  );
};

export default Main;
