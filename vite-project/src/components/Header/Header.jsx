// src/components/Header/Header.jsx
import React, { useState } from 'react';
//import './Header.css';
import PopUser from '../popups/PopUser/PopUser';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = () => {
    setIsModalOpen(!isModalOpen);
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
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
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
