// components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
