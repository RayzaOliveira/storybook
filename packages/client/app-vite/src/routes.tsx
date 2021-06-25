import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/purchases" element={<h1>Compras</h1>} />
      <Route
        path="/password"
        element={
          <>
            <h1> Alterar Senha</h1>
            <Link to="/">Compras</Link>
          </>
        }
      />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
