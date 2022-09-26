import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { HOME, REGISTER } from 'constants/Routes';
import { auth } from 'config/firebase.config';
import { AppDispatch, RootState } from 'redux/store';
import { fetchUserById } from 'redux/auth/thunk';
import { LoginGoogle } from './LoginGoogle';

export const Login = () => {
  const { id } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    dispatch(fetchUserById({ auth, email, password }));
  };

  useEffect(() => {
    if (id) {
      navigate(HOME);
    }
  }, [id]);

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
