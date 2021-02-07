import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './User.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';

import { setSelectedUser } from '../../store/slices/users';


const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => get(state, ['users', 'selectedUser'], null));
  const [userRows, setUserRows] = useState([]);

  const renderUser = useCallback(() => {
    const rows = [];

    if (user) {
      Object.keys(user).map(key => {
        if (typeof user[key] === 'object') {
          const innerProps = [];
          for(let prop in user[key]) {
            if (typeof user[key][prop] === 'string') {
              innerProps.push(
                <div className = 'user__cell_row' key = {prop}>{user[key][prop]}</div>
              );
            }   
          }
          rows.push(
            <div className = 'user__row' key = {key}>
              <div className = 'user__cell'>{key}</div>
              <div className = 'user__cell'>{innerProps}</div>
            </div>
          );
        
        } else {
          rows.push(
            <div className = 'user__row' key = {key}>
              <div className = 'user__cell'>{key}</div>
              <div className = 'user__cell'>{user[key]}</div>
            </div>
          );
        }        
      });
    }   

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
        <p>{user && user.name ? user.name : 'unknown'}</p>
      </Header>

      <div className = 'user'>
        {userRows}
      </div>
    </div>
  );
};

export default User;
