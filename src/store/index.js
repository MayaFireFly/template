import { configureStore } from '@reduxjs/toolkit';

import photosReducer from './slices/photos';
import albumsReducer from './slices/albums';
import usersReducer from './slices/users';
import titleReducer from './slices/title';


export default configureStore({
  reducer: {
    photos: photosReducer,
    albums: albumsReducer,
    users: usersReducer,
    title: titleReducer
  }
});
