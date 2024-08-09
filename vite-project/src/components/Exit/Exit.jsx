import React from 'react';
import {
  ExitWrapper,
  ExitContainer,
  ExitTitle,
  ExitButtonGroup,
  ExitButtonYes,
  ExitButtonNo,
} from './Exit.styled';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    // Логика выхода из аккаунта
    navigate('/signin');
  };

  const handleNoClick = () => {
    navigate(-1); // Вернуться на предыдущую страницу
  };

  return (
    <ExitWrapper>
      <ExitContainer>
        <ExitTitle>Вы уверены, что хотите выйти?</ExitTitle>
        <ExitButtonGroup>
          <ExitButtonYes onClick={handleYesClick}>Да, выйти</ExitButtonYes>
          <ExitButtonNo onClick={handleNoClick}>Нет, остаться</ExitButtonNo>
        </ExitButtonGroup>
      </ExitContainer>
    </ExitWrapper>
  );
};

export default Exit;
