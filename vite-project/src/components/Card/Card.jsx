import React from 'react';
import {
  CardContainer,
  CardGroup,
  CardTheme,
  TopicText,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate
} from './Card.styled';

// Создаем объект для хранения стилей для каждой темы
const cardStyles = {
  'Web Design': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  'Copywritting': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  'Research': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  }
};

const Card = ({ card }) => {
  const style = cardStyles[card.topic] || {};

  return (
    <CardContainer>
      <CardGroup>
        <CardTheme style={style}>
          <TopicText style={style}>{card.topic}</TopicText>
        </CardTheme>
        <CardBtn>
          <div></div>
          <div></div>
          <div></div>
        </CardBtn>
      </CardGroup>
      <CardContent>
        <CardTitle>{card.title}</CardTitle>
        <CardDate>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <g clipPath="url(#clip0_1_415)">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round"></path>
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
            <defs>
              <clipPath id="clip0_1_415">
                <rect width="13" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>{card.date}</p>
        </CardDate>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
