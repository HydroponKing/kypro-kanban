import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { fetchTasks } from '../../api';

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

  const handleTaskUpdate = (updatedTasks) => {
    setCards(updatedTasks);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header onCardAdd={(newCard) => setCards([...cards, { ...newCard, status: 'Без статуса' }])} onLogout={onLogout} />
      <Main cards={cards} />
      <PopBrowse />
      <Outlet context={{ cards, onSave: handleTaskUpdate }} />
    </>
  );
};

export default HomePage;
