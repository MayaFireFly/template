import { createSlice } from '@reduxjs/toolkit';

import API from '../../networkers';


const setUsers = async dispatch => {
  dispatch(usersLoading());
  try {
    const response = await API.users.getUsersList();
    if (response.error) {
      dispatch(usersRejected({error: response.error}));
    } else {
      dispatch(usersReceived(response.data));
    }    
  } catch(error) {
    dispatch(usersRejected({error}));
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    selectedUser: null,
    loading: false,
    error: null
  },
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    usersLoading(state, action) {
      if (!state.loading) {
        state.loading = true;
      }
    },
    usersReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.users = action.payload;
      }
    },
    usersRejected(state, action) {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    }
  }
});

export const { setSelectedUser, usersLoading, usersReceived, usersRejected } = usersSlice.actions;
export { setUsers };

export default usersSlice.reducer;