import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/Profile';
import EducationPage from './pages/EducationPage';
import IncentivesPage from './pages/IncentivesPage';
import CommunityPage from './pages/CommunityPage';
import WearableData from './components/WearableData';
import { AuthProvider, useAuth } from './components/AuthContext';
import Navbar from './components/Navbar';
import ArticleTemplate from './components/education/ArticleTemplate';
import Leaderboard from './components/Leaderboard';

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
        <Route path="/bank" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><RegisterPage /></AuthRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/education" element={<PrivateRoute><EducationPage /></PrivateRoute>} />
        <Route path="/incentives" element={<PrivateRoute><IncentivesPage /></PrivateRoute>} />
        <Route path="/community" element={<PrivateRoute><CommunityPage /></PrivateRoute>} />
        <Route path="/education/:articleId" element={<ArticleTemplate />} />
        <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        <Route path="/wearable" element={<PrivateRoute><WearableData /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
