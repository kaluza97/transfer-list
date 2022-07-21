import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { MAIN } from './Routes';

export const ProtectedRoute: FC<{ user: boolean; children: JSX.Element }> = ({
  user,
  children,
}) => {
  if (!user) {
    return <Navigate to={MAIN} replace />;
  }

  return children;
};
