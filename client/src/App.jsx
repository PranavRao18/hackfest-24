import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider, useAuth } from './components/AuthContext';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import CommunityPage from './pages/CommunityPage';
import ChallengesPage from './pages/ChallengesPage';
import EducationPage from './pages/EducationPage';
import IncentivesPage from './pages/IncentivesPage';
import ArticleTemplate from './components/education/ArticleTemplate';

const AuthRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/profile" />;
};

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><RegisterPage /></AuthRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/:articleId" element={<ArticleTemplate />} />
        <Route path="/incentives" element={<IncentivesPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
