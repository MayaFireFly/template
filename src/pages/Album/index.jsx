import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import './Album.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

import { setSelectedAlbum } from '../../store/slices/albums';
import { setPhotos, setSelectedPhoto, setSelectedPhotos } from '../../store/slices/photos';


const Album = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const album = useSelector(state => get(state, ['albums', 'selectedAlbum'], null));
  const photos = useSelector(state => get(state, ['photos', 'photos'], []));
  const photosSelected = useSelector(state => get(state, ['photos', 'selectedPhotos'], []));
  const loading = useSelector(state => get(state, ['photos', 'loading'], false));
  const [albumRows, setAlbumRows] = useState([]);

  const renderAlbum = useCallback(() => {
    const rows = [];
    const photosForRows = photosSelected.length > 0 ? photosSelected : photos;
    photosForRows.map((photo, idx) => {
      rows.push(
        <img 
          className = 'album__image' 
          src = {photo.thumbnailUrl} 
          key = {idx} 
          onClick = {() => dispatch(setSelectedPhoto(photo))}
          alt = {photo.title}
        />
      );
    });   
    return rows;
  }, [dispatch, photos, photosSelected]);

  useEffect(() => {
    (async () => {      
      try {
        await setPhotos(dispatch);
        if (album) {
          dispatch(setSelectedPhotos(album.id));
        }
      } catch(error) {
        console.log(error);
      }
    })();     
  }, [dispatch, album]);

  useEffect(() => {
    console.log('second UF');
    if (!loading && photos.length > 0) {
      const rows = renderAlbum();
      setAlbumRows(rows);
    }
  }, [renderAlbum, photos, loading]);

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => {
          dispatch(setSelectedPhoto(null));
          dispatch(setSelectedPhotos(null));
          dispatch(setSelectedAlbum(null));
          history.goBack();
        }} />}
      >
        <p>{album && album.title ? album.title : 'unknown'}</p>
      </Header>

      <div className = 'album'>
        {loading && <Spinner/>}
        {albumRows}
      </div>
    </div>
  );
};

export default Album;
