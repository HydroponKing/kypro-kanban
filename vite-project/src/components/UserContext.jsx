import React, { createContext, useState, useEffect } from 'react';
import { fetchUserInfo } from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const userInfo = await fetchUserInfo(); // Получаем данные о пользователе из API
          setUser(userInfo);
        } catch (error) {
          console.error('Failed to load user info:', error);
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
