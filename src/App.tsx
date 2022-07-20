import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'components/home/Component';
import { Login } from 'components/Login';
import { SignUp } from 'components/SignUp';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
