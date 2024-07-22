import React from "react";
import Column from "../Column/Column";
//import { cards as initialCards } from "../../data"; //импорт больше не нужен.

const Main = ({ cards }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <div className="main__content">
      {statusList.map((status) => (
        <Column
          key={status}
          title={status}
          cardList={cards.filter(card => card.status === status)}
        />
      ))}
    </div>
  );
};

export default Main;
