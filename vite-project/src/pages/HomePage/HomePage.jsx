import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { fetchTasks } from '../../api'; // Импортируем функцию для получения данных из API

const HomePage = ({ onLogout }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setCards(fetchedTasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header onCardAdd={addCard} onLogout={onLogout} />
      <Main cards={cards} />
      <PopBrowse />
      <Outlet context={{ cards }} />
    </>
  );
};

export default HomePage;
