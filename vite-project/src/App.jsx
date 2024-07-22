import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopExit from './components/popups/PopExit/PopExit';
import PopUser from './components/popups/PopUser/PopUser';
import Loader from './components/Loader/Loader'; // Импортируем компонент Loader
import { cards as initialCards } from './data'; // Импорт начального списка карточек

import './App.css';

function App() {
  const [cards, setCards] = useState(initialCards); // Состояние для хранения карточек
  const [isLoading, setIsLoading] = useState(true); // Состояние для управления загрузкой

  useEffect(() => {
    // Эмуляция загрузки данных
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Устанавливаем задержку 2 секунды для эмуляции загрузки
  }, []);

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Main cards={cards} />
          <PopBrowse />
          <PopNewCard addCard={addCard} />
          <PopExit />
          {/*<PopUser /> */}
        </>
      )}
    </div>
  );
}

export default App;
