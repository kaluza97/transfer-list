import { createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from './thunk';

export interface UserData {
  email: null | string;
  id: null | string;
  isLoading: boolean;
}

export const initialState: UserData = {
  isLoading: false,
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.id = action.payload.uid;
        state.isLoading = false;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.isLoading = false;
      });
  },
  reducers: {
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;
