// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Get token from local storage

  // If token exists, render the children (protected component)
  // Otherwise, redirect to the login page
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
