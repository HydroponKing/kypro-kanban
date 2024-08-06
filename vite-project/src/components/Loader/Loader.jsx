import React, { useEffect } from 'react';
import { LoaderWrapper } from './Loader.styled';

const Loader = ({ setCards, setLoading, initialCards }) => {
  useEffect(() => {
    // Имитируем загрузку данных с задержкой
    setTimeout(() => {
      setCards(initialCards);
      setLoading(false); // Устанавливаем загрузку в false после загрузки данных
    }, 2000); // Замените 2000 на нужное время загрузки в миллисекундах
  }, [setCards, setLoading, initialCards]);

  return (
    <LoaderWrapper>
      <p>Страница загружается...</p>
    </LoaderWrapper>
  );
};

export default Loader;
