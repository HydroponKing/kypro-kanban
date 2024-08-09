// src/components/NotFound/NotFound.styled.js
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Анимация вращения всего окна
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const move = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(500px, -250px); /* Перемещение на 500px вправо и 250px вверх */
  }
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${spin} 2s linear infinite; /* Увеличена скорость вращения */
`;

export const NotFoundTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const NotFoundLink = styled(Link)`
  font-size: 16px;
  color: #565eef;
  text-decoration: none;
  position: relative;
  transition: transform 0.5s ease-in-out;

  &:hover {
    animation: ${move} 0.5s forwards; /* Анимация перемещения при наведении */
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;
