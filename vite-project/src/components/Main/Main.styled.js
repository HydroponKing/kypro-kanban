import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between; /* Распределяет колонки равномерно */
  flex-wrap: wrap; /* Позволяет колонкам переноситься на новую строку при необходимости */
  padding: 0 100px; /* Отступы слева и справа */

  .main__column {
    flex: 1 0 21%; /* Настраиваем ширину колонок и разрешаем их перенос на новую строку при необходимости */
    max-width: 220px; /* Ограничиваем максимальную ширину */
    margin: 10px; /* Отступы вокруг колонок */
    box-sizing: border-box; /* Учитываем отступы в ширине и высоте */
  }

  .column__title {
    padding: 0 10px;
    margin: 15px 0;
  }

  .column__title p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }

  .cards {
    width: 100%;
    display: block;
    position: relative;
  }

  .cards__item {
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
  }

  .card__group {
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card__theme p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }

  .card__btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
  }

  .card__btn div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }

  .card__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
  }

  .card__date svg {
    width: 13px;
  }

  .card__date p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }

  @media screen and (max-width: 1200px) {
    .main__block {
      width: 100%;
      margin: 0 auto;
      padding: 40px 0 64px;
    }

    .main__content {
      display: block;
    }

    .main__column {
      width: 100%;
      margin: 0 auto;
      display: block;
    }

    .cards {
      width: 100%;
      display: flex;
      overflow-y: auto;
    }

    .cards__card {
      width: 220px;
      height: 130px;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: stretch;
      padding: 15px 13px 19px;
      margin-bottom: 15px;
      border: 1px solid transparent;
    }
  }

  @media screen and (max-width: 660px) {
    .calendar {
      max-width: 340px;
      width: 100%;
    }

    .calendar__ttl,
    .calendar__nav,
    .calendar__period {
      padding: 0;
    }

    .calendar .date-create {
      display: none;
      margin-bottom: 7px;
    }

    .calendar__p {
      font-size: 14px;
    }

    .calendar__day-name {
      font-size: 14px;
    }

    .calendar__cells {
      width: 344px;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .calendar__cell {
      width: 42px;
      height: 42px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
  }
`;
