import { createSlice } from '@reduxjs/toolkit';

import API from '../../networkers';


const setAlbums = async dispatch => {
  dispatch(albumsLoading());
  try {
    const response = await API.albums.getAlbumsList();
    if (response.error) {
      dispatch(albumsRejected({error: response.error}));
    } else {
      dispatch(albumsReceived(response.data));
    }    
  } catch(error) {
    dispatch(albumsRejected({error}));
  }
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
    selectedAlbum: null,
    loading: false,
    error: null
  },
  reducers: {
    setSelectedAlbum(state, action) {
      state.selectedAlbum = state.albums.find(album => album.id == action.payload);
    },
    albumsLoading(state, action) {
      if (!state.loading) {
        state.loading = true;
      }
    },
    albumsReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.albums = action.payload;
      }
    },
    albumsRejected(state, action) {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    }
  }
});

export const { setSelectedAlbum, albumsLoading, albumsReceived, albumsRejected } = albumsSlice.actions;
export { setAlbums };

export default albumsSlice.reducer;