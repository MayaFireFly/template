import { createSlice } from '@reduxjs/toolkit';


const titleSlice = createSlice({
  name: 'title',
  initialState: {
    title: null
  },
  reducers: {
    setTitle(state, action){
      state.title = action.payload;
    }
  }
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;