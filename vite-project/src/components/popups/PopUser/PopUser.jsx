import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserModal, UserModalContent, PopUserName, PopUserMail, LogoutButton } from './PopUser.styled';
import { UserContext } from '../../UserContext';

const PopUser = ({ onClose }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);

  const handleLogoutClick = () => {
    onClose();
    navigate('/exit');
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>; // Если пользователь не найден, отображаем сообщение
  }

  return (
    <UserModal>
      <UserModalContent>
        <PopUserName>{user.login}</PopUserName>
        <PopUserMail>{`${user.login}@gmail.com`}</PopUserMail>
        <LogoutButton type="button" onClick={handleLogoutClick}>Выйти</LogoutButton>
      </UserModalContent>
    </UserModal>
  );
};

export default PopUser;
