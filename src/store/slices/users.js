import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [],
  selectedUser: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers : {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    }
  }
});

export const {
  setUsers,
  setSelectedUser
} = usersSlice.actions;

export default usersSlice.reducer;