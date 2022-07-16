import { signInWithEmailAndPassword, auth } from 'config/firebase.config';
import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <h1>Login</h1>
      Email:
      <br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      Password:
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};
