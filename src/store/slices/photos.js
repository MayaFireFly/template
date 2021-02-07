import { createSlice } from '@reduxjs/toolkit';

import API from '../../networkers';


const setPhotos = async dispatch => {
  dispatch(photosLoading());
  try {
    const response = await API.photos.getPhotosList();
    if (response.error) {
      dispatch(photosRejected({error: response.error}));
    } else {
      dispatch(photosReceived(response.data));
    }    
  } catch(error) {
    dispatch(photosRejected({error}));
  }
};

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    selectedPhoto: null,
    selectedPhotos: [],
    loading: false,
    error: null
  },
  reducers: {
    setSelectedPhoto(state, action) {
      state.selectedPhoto = action.payload;
    },
    setSelectedPhotos(state, action) {
      if (action.payload) {
        state.selectedPhotos = state.photos.filter(photo => photo.albumId === action.payload);
      } else {
        state.selectedPhotos = [];
      }      
    },
    photosLoading(state, action) {
      if (!state.loading) {
        state.loading = true;
      }
    },
    photosReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.photos = action.payload;
      }
    },
    photosRejected(state, action) {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    }
  }
});

export const { setSelectedPhoto, photosLoading, photosReceived, photosRejected, setSelectedPhotos } = photosSlice.actions;
export { setPhotos };

export default photosSlice.reducer;