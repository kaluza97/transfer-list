import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Auth,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

interface Props {
  auth: Auth;
  email: string;
  password: string;
}

export const fetchUserById = createAsyncThunk('user/fetchByIdStatus', async (data: Props) => {
  const { auth, email, password } = data;
  auth
    .setPersistence(browserSessionPersistence)
    .then(() => {
      console.log('Persistence set');
    })
    .catch((error) => {
      console.log(error);
    });
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response.user;
});

export const userLogout = createAsyncThunk('user/userLogout', async (auth: Auth) => {
  const response = await signOut(auth)
    .then(() => {
      console.log('zostales wylogowany');
    })
    .catch((error) => {
      console.log('logout failed');
    });
  return response;
});
