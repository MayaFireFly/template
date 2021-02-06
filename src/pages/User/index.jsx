import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './User.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';

import { setSelectedUser } from '../../store/slices/users';


const User = () => {
  console.log('User start');
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => get(state, ['users', 'selectedUser'], null));
  const [userRows, setUserRows] = useState([]);  

  const renderUser = useCallback(() => {
    const rows = Object.keys(user).map(key => (
      <div className = 'user__row' key = {key}>
        <div className = 'user__cell'>{key}</div>
        <div className = 'user__cell'>{user[key]}</div>
      </div>
    ));
    return rows;
  }, [user]);

  useEffect(() => {
    const rows = renderUser();
    setUserRows(rows);
  }, [renderUser]);

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => {
          dispatch(setSelectedUser(null));
          history.goBack();
        }} />}
      >
        <p>{user.name ? user.name : 'unknown'}</p>
      </Header>

      <div className = 'user'>
        {userRows}
      </div>
    </div>
  );
};

export default User;
