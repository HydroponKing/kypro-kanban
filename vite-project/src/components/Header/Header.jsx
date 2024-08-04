import React, { useState } from 'react';
import styled from 'styled-components';
import PopUser from '../popups/PopUser/PopUser';

const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const Logo = styled.div`
  &._show._light img {
    width: 85px;
  }
  &._dark img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }
  & a {
    color: #ffffff;
  }
`;

const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  cursor: pointer;
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

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
