import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { HOME, REGISTER } from 'constants/Routes';
import { auth, signInWithEmailAndPassword } from 'config/firebase.config';
import { setUser } from 'redux/slice/authSlice';
import { LoginGoogle } from './LoginGoogle';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        }),
      );
      navigate(HOME);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit" onClick={handleLogin}>
        login
      </button>
      <p>
        <LoginGoogle />
        <Link to={REGISTER}>register</Link>
      </p>
    </div>
  );
};
