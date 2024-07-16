import React from "react";
import Card from "../Card/Card";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <div key={card.id} className="cards__item">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
