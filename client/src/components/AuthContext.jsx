// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const addPoints = (points) => {
    setUser((prevUser) => ({ ...prevUser, points: (prevUser.points || 0) + points }));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, addPoints }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
