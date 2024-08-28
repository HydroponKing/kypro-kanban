import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserModal, UserModalContent, PopUserName, PopUserMail, LogoutButton } from './PopUser.styled';
import { UserContext } from '../../UserContext'; // Правильный путь к UserContext

const PopUser = ({ onClose }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Используем useContext для доступа к контексту пользователя

  const handleLogoutClick = () => {
    onClose(); // Закрыть модальное окно
    navigate('/exit'); // Перенаправить на страницу выхода
  };

  return (
    <UserModal>
      <UserModalContent>
        {user ? (
          <>
            <PopUserName>{user.login}</PopUserName> {/* Отображаем логин пользователя */}
            <PopUserMail>{`${user.login}@gmail.com`}</PopUserMail> {/* Формируем email на основе логина */}
          </>
        ) : (
          <p>Загрузка...</p>
        )}
        <LogoutButton type="button" onClick={handleLogoutClick}>Выйти</LogoutButton>
      </UserModalContent>
    </UserModal>
  );
};

export default PopUser;
