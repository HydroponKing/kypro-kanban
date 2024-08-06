import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopExit from './components/popups/PopExit/PopExit';
import Loader from './components/Loader/Loader';
import { cards as initialCards } from './data'; // Импорт начального списка карточек
import './App.css';

function App() {
  const [cards, setCards] = useState([]); // Изначально пустой массив карточек
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  if (loading) {
    return <Loader setCards={setCards} setLoading={setLoading} initialCards={initialCards} />;
  }

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
