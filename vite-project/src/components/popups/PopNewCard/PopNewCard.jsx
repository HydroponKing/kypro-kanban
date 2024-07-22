import React, { useState } from 'react';
//import './PopNewCard.css';

const PopNewCard = ({ addCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: Date.now(), // Уникальный ID, можно использовать другой метод для генерации ID
      title,
      description,
      date,
    };
    addCard(newCard); // Добавляем новую карточку
    setTitle(''); // Очистка полей формы
    setDescription('');
    setDate('');
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a className="pop-new-card__close" href="#">✖</a>
            <div className="pop-new-card__wrap">
              <form onSubmit={handleSubmit} className="pop-new-card__form form-new" id="formNewCard">
                {/* Форма для ввода данных о новой карточке */}
                <div className="form-new__block">
                  <label className="subttl" htmlFor="formTitle">Название задачи</label>
                  <input
                    autoFocus
                    className="form-new__input"
                    id="formTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите название задачи..."
                    type="text"
                  />
                </div>
                <div className="form-new__block">
                  <label className="subttl" htmlFor="textArea">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    id="textArea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </div>
                <button className="form-new__create _hover01" type="submit">Создать задачу</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
