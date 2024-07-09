import React from 'react';
//import './Header.css';

const Header = () => (
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
          <a className="header__user _hover02" href="#user-set-target">
            Ivan Ivanov
          </a>
          <div className="header__pop-user-set pop-user-set" id="user-set-target">
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
              <p>Темная тема</p>
              <input className="checkbox" name="checkbox" type="checkbox" />
            </div>
            <button className="_hover03" type="button">
              <a href="#popExit">Выйти</a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
