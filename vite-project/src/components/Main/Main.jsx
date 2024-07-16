import React from "react";
import Column from "../Column/Column";
import { cards } from "../../data";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  return (
    <div className="main__content">
      {statusList.map((status) => (
        <Column
          key={status}
          title={status}
          cardList={cards.filter((card) => card.status === status)}
        />
      ))}
    </div>
  );
};

export default Main;
