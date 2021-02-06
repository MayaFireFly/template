import { configureStore } from '@reduxjs/toolkit';

import photosReducer from './slices/photos';
import albumsReducer from './slices/albums';
import usersReducer from './slices/users';


export default configureStore({
  reducer: {
    photos: photosReducer,
    albums: albumsReducer,
    users: usersReducer
  }
});
