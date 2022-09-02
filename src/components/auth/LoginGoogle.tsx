import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, GoogleAuthProvider, signInWithPopup } from 'config/firebase.config';
import { setUser } from '../../redux/slice/authSlice';

export const LoginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = { result };
        console.log(user);
        // dispatch(
        //   setUser({
        //     email: user.email,
        //     id: user.uid,
        //   }),
        // );
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <p>Login via Google</p>
      <button type="submit" onClick={login}>
        login via gmail
      </button>
    </div>
  );
};
