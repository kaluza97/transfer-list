import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_PAGE } from 'constants/Routes';
import { auth } from 'config/firebase.config';
import { AppDispatch } from 'redux/store';
import { fetchUserById } from 'redux/auth/thunk';

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchUserById({ auth, email, password }));
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (data) {
        navigate(DASHBOARD_PAGE);
      }
    });
  }, [auth]);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
