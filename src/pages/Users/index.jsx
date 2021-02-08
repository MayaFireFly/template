import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './Users.sass';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import Menu from '../../components/Menu';

import { setSelectedUser, setUsers } from '../../store/slices/users';


const Users = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const users = useSelector(state => get(state, ['users', 'users'], []));
  const loading = useSelector(state => get(state, ['users', 'loading'], false));
  const title = useSelector(state => get(state, ['title', 'title'], 'Template project'));
  const [usersRows, setUsersRows] = useState([]);  

  useEffect(() => {
    (async () => {      
      try {
        await setUsers(dispatch);
      } catch(error) {
        console.log(error);
      }
    })();    
  }, [dispatch]);

  const renderUsers = useCallback((users) => {
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
  }, [history, match.url, dispatch]);

  useEffect(() => {
    if (!loading) {
      const rows = renderUsers(users);
      setUsersRows(rows);
    }
  }, [renderUsers, loading, users]);

  return(
    <div>
      <Header>
        {title}
      </Header>

      <Menu/>      

      <div className = 'users'>
        {loading && <Spinner/>}

        {usersRows}
      </div>
    </div>
  );
};

export default Users;
