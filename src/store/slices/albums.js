import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  albums: [],
  selectedAlbum: null
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers : {
    setAlbums(state, action) {
      state.albums = action.payload;
    },
    setSelectedAlbum(state, action) {
      state.selectedAlbum = action.payload;
    }
  }
});

export const {
  setAlbums,
  setSelectedAlbum
} = albumsSlice.actions;

export default albumsSlice.reducer;