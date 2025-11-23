// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create an axios instance that uses deployed backend when set
  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const validateToken = async () => {
    try {
      const res = await api.get('/api/users/validateToken');
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
      await api.post('/api/users/logout', {});
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