import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  email: null | string;
  id: null | string;
}

export const initialState: UserData = {
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserData>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
