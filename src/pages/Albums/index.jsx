import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './Albums.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

import { setAlbums, setSelectedAlbum } from '../../store/slices/albums';


const Albums = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const albums = useSelector(state => get(state, ['albums', 'albums'], []));
  const loading = useSelector(state => get(state, ['albums', 'loading'], false));
  const [albumsRows, setAlbumsRows] = useState([]);  

  useEffect(() => {
    (async () => {      
      try {
        await setAlbums(dispatch);
      } catch(error) {
        console.log(error);
      }
    })();    
  }, [dispatch]);

  const renderAlbums = useCallback((albums) => {
    const rows = albums.map((album, idx) => (
      <div className = 'albums__row' key = {idx} onClick = {() => {
        dispatch(setSelectedAlbum(album));
        history.push(match.url + '/' + album.id);
      }}>
        <div className = 'albums__cell'>{album.title}</div>
      </div>
    ));
    return rows;
  }, [history, match.url, dispatch]);

  useEffect(() => {
    if (!loading) {
      const rows = renderAlbums(albums);
      setAlbumsRows(rows);
    }
  }, [renderAlbums, loading, albums]);

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => history.goBack() } />}
      >
        <p>Albums</p>
      </Header>

      <div className = 'albums'>
        {loading && <Spinner/>}

        {albumsRows}
      </div>
    </div>
  );
};

export default Albums;
