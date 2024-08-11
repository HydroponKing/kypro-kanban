import styled, { css } from 'styled-components';

// Создаем объект для хранения стилей для каждой темы
export const topicStyles = {
  'Web Design': {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  'Copywritting': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  'Research': {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  }
};

const getCardThemeStyles = (topic) => {
  return topicStyles[topic] || {};
};

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  margin-bottom: 15px; /* Добавляем отступ между карточками */
  border: 1px solid transparent; /* Добавляем обводку, которая будет изменяться в зависимости от темы */
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ topic }) => css`
    background-color: ${getCardThemeStyles(topic).backgroundColor};
    color: ${getCardThemeStyles(topic).color};
  `}
`;

export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  margin: 0;
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;
