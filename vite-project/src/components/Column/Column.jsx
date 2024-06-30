import React from 'react';
//import './Column.css';
import Card from '../Card/Card';

const Column = ({ title }) => (
  <div className="main__column column">
    <div className="column__title">
      <p>{title}</p>
    </div>
    <div className="cards">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Column;
