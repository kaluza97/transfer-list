import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface Props {
  auth: Auth;
  email: string;
  password: string;
}

export const fetchUserById = createAsyncThunk('user/fetchByIdStatus', async (data: Props) => {
  const { auth, email, password } = data;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response.user;
});

export const userLogout = createAsyncThunk('user/userLogout', async (auth: Auth) => {
  const response = await signOut(auth);
  return response;
});
