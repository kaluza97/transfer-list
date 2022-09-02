import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'components/home/Component';
import { Login } from 'components/auth/Login';
import { SignUp } from 'components/auth/SignUp';
import { ProtectedRoute } from 'constants/ProtectedRoutes';
import { useSelector } from 'react-redux';
import { HOME, MAIN, REGISTER } from 'constants/Routes';

export const App = () => {
  const userId = useSelector((state: { auth: { id: null | string } }) => state.auth.id);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  useEffect(() => {
    if (userId !== null) setIsUserLogged(true);
  }, [userId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Login />} />
        <Route path={REGISTER} element={<SignUp />} />
        <Route
          path={HOME}
          element={
            <ProtectedRoute user={isUserLogged}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
