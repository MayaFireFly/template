import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { useParams } from 'react-router-dom';

import './Album.sass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import Menu from '../../components/Menu';
import { Carousel } from 'react-responsive-carousel';

import { setPhotos, setSelectedPhotos } from '../../store/slices/photos';
import { setAlbums, setSelectedAlbum } from '../../store/slices/albums';


const Album = () => {
  const dispatch = useDispatch();
  const album = useSelector(state => get(state, ['albums', 'selectedAlbum'], null));
  const albums = useSelector(state => state.albums.albums);
  const photos = useSelector(state => get(state, ['photos', 'photos'], []));
  const photosSelected = useSelector(state => get(state, ['photos', 'selectedPhotos'], []));
  const loadingAlbums = useSelector(state => get(state, ['albums', 'loading'], false));
  const loadingPhotos = useSelector(state => get(state, ['photos', 'loading'], false));
  const loading = loadingAlbums ?? loadingPhotos;
  const title = useSelector(state => get(state, ['title', 'title'], 'Template project'));
  const [albumRows, setAlbumRows] = useState([]);
  const { id } = useParams();

  const renderAlbum = useCallback(() => {
    const rows = [];
    photosSelected.map((photo, idx) => {
      rows.push(
        <div key = {idx} >
          <img 
            //className = 'album__image' 
            src = {photo.url} 
            alt = {photo.title}
          />
        </div>
      );
    });   
    return rows;
  }, [photosSelected]);

  useEffect(() => {
    if (!album) {
      albums && albums.length > 0 ?
        (() => {      
          try {
            dispatch(setSelectedAlbum(id));
          } catch(error) {
            console.log(error);
          }
        })() :

        (async () => {      
          try {
            await setAlbums(dispatch);
          } catch(error) {
            console.log(error);
          }
        })();

    }
  }, [dispatch, id]);

  useEffect(() => {
    if (photosSelected.length === 0) {
      photos && photos.length > 0 ?
        (() => {      
          try {
            dispatch(setSelectedPhotos(id));
          } catch(error) {
            console.log(error);
          }
        })() :

        (async () => {      
          try {
            await setPhotos(dispatch);
          } catch(error) {
            console.log(error);
          }
        })();

    }
  }, [dispatch, id, photos.length]);

  useEffect(() => {
    if (photosSelected.length > 0) {
      const rows = renderAlbum();
      setAlbumRows(<div className = 'carousel__wrapper'><Carousel>{rows}</Carousel></div>);
    }
  }, [photosSelected, photosSelected.length, renderAlbum, album, title]);

  return(
    <div>
      <Header>
        {album && album.title ? album.title : title}
      </Header>

      <Menu/>

      <div className = 'album'>
        {loading && <Spinner/>}
        {albumRows}
      </div>
    </div>
  );
};

export default Album;
