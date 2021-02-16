import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useParams } from 'react-router-dom';

import './User.sass';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { setUsers, setSelectedUser } from '../../store/slices/users';


const User = () => {
  const user = useSelector(state => state.users.selectedUser);
  const users = useSelector(state => state.users.users);
  const title = useSelector(state => get(state, ['title', 'title'], 'Template project'));
  const dispatch = useDispatch();
  const [userRows, setUserRows] = useState([]);
  const { id } = useParams();

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
    if (!user) {
      users && users.length > 0 ?

        (async () => {      
          try {
            dispatch(setSelectedUser(id));            
          } catch(error) {
            console.log(error);
          }
        })() :

        (async () => {      
          try {
            await setUsers(dispatch);
          } catch(error) {
            console.log(error);
          }
        })();

    } else {      
      const rows = renderUser(user);
      setUserRows(rows);
    }        
  }, [dispatch, id, renderUser, user, users]);


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
