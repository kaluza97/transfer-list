import { auth } from 'config/firebase.config';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from 'redux/store';
import { MAIN } from '../../constants/Routes';

export const ProtectedRoutes: FC<{ route: JSX.Element }> = ({ route }) => {
  const { id } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (!data) {
        navigate(MAIN);
      }
    });
  }, [auth]);

  return id ? route : <Navigate to="/" replace state={{ from: location }} />;
};
