import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import './User.sass';

import Header from '../../components/Header';
import Menu from '../../components/Menu';


const User = () => {
  const user = useSelector(state => get(state, ['users', 'selectedUser'], null));
  const title = useSelector(state => get(state, ['title', 'title'], 'Template project'));
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
      <Header>
        {user && user.name ? user.name : title}
      </Header>

      <Menu/>

      <div className = 'user'>
        {userRows}
      </div>
    </div>
  );
};

export default User;
