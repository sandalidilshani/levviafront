import {jwtDecode} from 'jwt-decode';

export const getToken = () => {
  const t= localStorage.getItem('token');
  console.log("auth token",t);
  return t;

};

export const getRoleFromToken = () => {
  const token = getToken();
  if (!token) {
    console.error('No token found');
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
