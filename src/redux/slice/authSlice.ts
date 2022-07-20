import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  email: null | string;
  id: null | string;
}

const initialState: InitialState = {
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialState>) {
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
