import React, { useState } from 'react';
import PopUser from '../popups/PopUser/PopUser';
import { HeaderWrapper, Container, HeaderBlock, Logo, HeaderNav, HeaderButton, HeaderUser } from './Header.styled';

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
      date: new Date().toISOString().split('T')[0],
      status: 'Без статуса'
    };
    onCardAdd(newCard);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <Logo className="header__logo _show _light">
            <a href="" target="_self">
              <img alt="logo" src="public/logo.png" />
            </a>
          </Logo>
          <Logo className="header__logo _dark">
            <a href="" target="_self">
              <img alt="logo" src="public/logo_dark.png" />
            </a>
          </Logo>
          <HeaderNav>
            <HeaderButton id="btnMainNew" onClick={handleAddTaskClick}>
              Создать новую задачу
            </HeaderButton>
            <HeaderUser onClick={handleUserClick}>
              Ivan Ivanov
            </HeaderUser>
            {isModalOpen && <PopUser onClose={handleUserClick} />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
