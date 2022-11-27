import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from 'components/dashboardPage/Component';
import { Login } from 'components/auth/Login';
import { Logout } from 'components/auth/Logout';
import { ProtectedRoutes } from 'components/routes/ProtectedRoutes';
import { DASHBOARD_PAGE, MAIN } from 'constants/Routes';
import { useAppSelector } from 'hooks/useAppSelector';

export const AppRouting = () => {
  const { id } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <p>Your id: {id}</p>
      <Routes>
        <Route path={MAIN} element={<Login />} />
        <Route path={DASHBOARD_PAGE} element={<ProtectedRoutes route={<DashboardPage />} />} />
      </Routes>
    </BrowserRouter>
  );
};
