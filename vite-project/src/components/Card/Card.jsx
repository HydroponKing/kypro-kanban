// src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  let topicClass = '';

  if (card.topic === 'Web Design') {
    topicClass = '_purple';
  }
  if (card.topic === 'Copywritting') {
    topicClass = '_purple';
  }
  if (card.topic === 'Research') {
    topicClass = '_purple';
  }

  return (
    <div className="cards__card">
      <div className="card__group">
        <div className={`card__theme ${topicClass}`}>
          <p className={`topic-text ${topicClass}`}>{card.topic}</p>
        </div>
        <div className="card__btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__title">{card.title}</h3>
        <div className="card__date">
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
        </div>
      </div>
    </div>
  );
};

export default Card;
