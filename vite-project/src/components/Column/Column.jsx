import React from "react";
import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, Cards, CardsItem } from './Column.styled';

const Column = ({ title, cardList }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <CardsItem key={card._id || `${card.title}-${card.date}`}>
            <Card card={card} />
          </CardsItem>
        ))}
      </Cards>
    </ColumnWrapper>
  );
};

export default Column;
