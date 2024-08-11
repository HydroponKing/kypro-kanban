// pages/HomePage/HomePage.jsx
import React from 'react';
import Header from '../../components/Header/Header'; // Импортируем Header
import Main from '../../components/Main/Main'; // Импортируем Main
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse'; // Импортируем PopBrowse
import { Outlet } from 'react-router-dom';

const HomePage = ({ onCardAdd, onLogout, cards }) => {
  return (
    <>
      <Header onCardAdd={onCardAdd} onLogout={onLogout} />
      <Main cards={cards} />
      <PopBrowse />
      <Outlet />
    </>
  );
};

export default HomePage;
