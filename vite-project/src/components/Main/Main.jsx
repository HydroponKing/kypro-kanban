import React from "react";
import Column from "../Column/Column";
import { MainContent } from './Main.styled';

const Main = ({ cards }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <MainContent>
      {statusList.map((status) => (
        <Column
          key={status}
          title={status}
          cardList={cards.filter(card => card.status === status)}
        />
      ))}
    </MainContent>
  );
};

export default Main;
