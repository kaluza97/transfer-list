import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'components/home/Component';
import { Login } from 'components/login/Component';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
