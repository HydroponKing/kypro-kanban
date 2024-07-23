// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopExit from './components/popups/PopExit/PopExit';
import { cards as initialCards } from './data'; // Импорт начального списка карточек
import './App.css';

function App() {
  const [cards, setCards] = useState(initialCards); // Состояние для хранения карточек

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  return (
    <div className="App">
      <Header onCardAdd={addCard} />
      <Main cards={cards} />
      <PopBrowse />
      <PopExit />
    </div>
  );
}

export default App;
