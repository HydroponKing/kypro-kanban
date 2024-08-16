import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './PopUser.css';
import { UserContext } from '../../UserContext'; // Правильный путь к UserContext

const PopUser = ({ onClose }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Используем useContext для доступа к контексту пользователя

  const handleLogoutClick = () => {
    onClose(); // Закрыть модальное окно
    navigate('/exit'); // Перенаправить на страницу выхода
  };

  return (
    <div className="user-modal">
      <div className="user-modal-content">
        {user ? (
          <>
            <p className="pop-user-set__name">{user.login}</p> {/* Отображаем логин пользователя */}
            <p className="pop-user-set__mail">{`${user.login}@gmail.com`}</p> {/* Формируем email на основе логина */}
            <div className="pop-user-set__theme">
              <p>Темная тема</p>
              <input className="checkbox" name="checkbox" type="checkbox" />
            </div>
          </>
        ) : (
          <p>Загрузка...</p>
        )}
        <button type="button" onClick={handleLogoutClick}>Выйти</button>
      </div>
    </div>
  );
};

export default PopUser;
