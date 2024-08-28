import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUser from '../popups/PopUser/PopUser';
import { HeaderWrapper, Container, HeaderBlock, LogoLight, LogoDark, HeaderNav, HeaderButton, HeaderUser } from './Header.styled';
import { UserContext } from '../UserContext';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddTaskClick = () => {
    navigate('/edit-task/new'); // Переход на страницу создания новой задачи
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <LogoLight>
            <a href="" target="_self">
              <img alt="logo" src="public/logo.png" />
            </a>
          </LogoLight>
          <LogoDark>
            <a href="" target="_self">
              <img alt="logo" src="public/logo_dark.png" />
            </a>
          </LogoDark>
          <HeaderNav>
            <HeaderButton id="btnMainNew" onClick={handleAddTaskClick}>
              Создать новую задачу
            </HeaderButton>
            <HeaderUser onClick={handleUserClick}>
              {user ? user.name : 'Загрузка...'}
            </HeaderUser>
            {isModalOpen && <PopUser onClose={handleUserClick} />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
