import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element=<HomePage/> />
      <Route path="/dashboard" element=<DashboardPage/> />
      <Route path="/login" element=<LoginPage/> />
      <Route path="/register" element=<RegisterPage/> />
    </Routes>
  </BrowserRouter>
);

export default App;
