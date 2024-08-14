import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopUser.css';

const PopUser = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onClose(); // Закрыть модальное окно
    navigate('/exit'); // Перенаправить на страницу выхода
  };

  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input className="checkbox" name="checkbox" type="checkbox" />
        </div>
        <button type="button" onClick={handleLogoutClick}>Выйти</button>
      </div>
    </div>
  );
};

export default PopUser;
