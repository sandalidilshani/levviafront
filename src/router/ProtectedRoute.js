import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRoleFromToken } from './auth';

const ProtectedRoute = ({ element: Element, allowedRoles, ...rest }) => {
  const role = getRoleFromToken();
  console.log(role);
 
  if (!role) {
    console.log("Role cannot be recognized or token is invalid");
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(role)) {
    console.log(role);
    return <Element {...rest} />;
  }

  const homeRoute = role === 'developer' ? '/developer/home' : '/user/home';
  return <Navigate to={homeRoute} />;
};

export default ProtectedRoute;
