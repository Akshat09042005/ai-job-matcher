// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // common axios config for requests that require cookies
  const axiosConfig = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const validateToken = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/users/validateToken', axiosConfig);
      setUser(res.data.user);
      setAuth(true);
    } catch (err) {
      setAuth(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post('http://localhost:5001/api/users/logout', {}, axiosConfig);
      setAuth(false);
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);