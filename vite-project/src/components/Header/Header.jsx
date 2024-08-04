// src/components/Header/Header.jsx
import React, { useState } from 'react';
//import './Header.css';
import PopUser from '../popups/PopUser/PopUser';

const Header = ({ onCardAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddTaskClick = () => {
    const newCard = {
      id: Date.now(),
      topic: 'Web Design',
      title: 'Новая задача',
      date: new Date().toISOString().split('T')[0], // текущая дата в формате YYYY-MM-DD
      status: 'Без статуса'
    };
    onCardAdd(newCard);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img alt="logo" src="public/logo.png" />
            </a>
          </div>  
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img alt="logo" src="public/logo_dark.png" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={handleAddTaskClick}>
              Создать новую задачу
            </button>
            <div className="header__user _hover02" onClick={handleUserClick}>
              Ivan Ivanov
            </div>
            {isModalOpen && <PopUser onClose={handleUserClick} />}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
