// pages/HomePage/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { cards as initialCards } from '../../data';

const HomePage = ({ onLogout }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Эмулируем загрузку данных
    setTimeout(() => {
      setCards(initialCards);
      setLoading(false);
    }, 1000);
  }, []);

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  if (loading) {
    return <Loader setCards={setCards} setLoading={setLoading} initialCards={initialCards} />;
  }

  return (
    <>
      <Header onCardAdd={addCard} onLogout={onLogout} />
      <Main cards={cards} />
      <PopBrowse />
      <Outlet />
    </>
  );
};

export default HomePage;
