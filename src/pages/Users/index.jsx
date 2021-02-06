import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './Users.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

import API from '../../networkers';
import { setUsers, setSelectedUser } from '../../store/slices/users';


const Users = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const users = useSelector(state => get(state, ['users', 'users'], []));
  const [usersRows, setUsersRows] = useState([]);  

  useEffect(() => {
    (async () => {
      try {  
        const response = await API.users.getUsersList();

        if (response.code === 200) {
          dispatch(setUsers(response.data));
        } else {
          console.log(response.error + ' ' + response.code);
        }        

      } catch(error) {
        console.log(error);
  
      } finally {
        setIsLoading(false);
      }
    })();    
  }, [dispatch]);

  const renderUsers = useCallback(() => {
    const rows = users.map((user, idx) => (
      <div className = 'users__row' key = {idx} onClick = {() => {
        dispatch(setSelectedUser(user));
        history.push(match.url + '/' + user.id);
      }}>
        <div className = 'users__cell'>{user.username}</div>
        <div className = 'users__cell'>{user.name}</div>
      </div>
    ));
    return rows;
  }, [users, history, match.url, dispatch]);

  useEffect(() => {
    if (!isLoading) {
      const rows = renderUsers();
      setUsersRows(rows);
    }
  }, [renderUsers, isLoading, users]);

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => history.goBack() } />}
      >
        <p>Users</p>
      </Header>

      <div className = 'users'>
        {isLoading && <Spinner/>}

        {usersRows}
      </div>
    </div>
  );
};

export default Users;
