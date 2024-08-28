import React, { createContext, useState, useEffect } from 'react';
import { fetchUserInfo } from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Token not found');
        setLoading(false); // Завершаем загрузку, если токена нет
        return;
      }

      try {
        console.log('Loading user info...');
        const userInfo = await fetchUserInfo(); // Получаем данные о пользователе из API
        if (userInfo && userInfo.login) {
          setUser(userInfo);
          console.log('User info loaded:', userInfo);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Failed to load user info:', error);
      } finally {
        setLoading(false); // Завершаем загрузку в любом случае
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
