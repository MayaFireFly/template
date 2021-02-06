import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  photos: [],
  selectedPhoto: null
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers : {
    setPhotos(state, action) {
      state.photos = action.payload;
    },
    setSelectedPhoto(state, action) {
      state.selectedPhoto = action.payload;
    }
  }
});

export const {
  setPhotos,
  setSelectedPhoto
} = photosSlice.actions;

export default photosSlice.reducer;