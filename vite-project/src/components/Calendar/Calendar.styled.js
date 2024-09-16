import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';

// Обёртка для календаря
export const CalendarContainer = styled.div`
  display: flex; /* Включает гибкую модель для выравнивания дочерних элементов */
  flex-direction: column ; /* Указывает, что элементы будут располагаться вертикально */
  gap: 17px; /* Устанавливает промежуток в 14 пикселей между элементами */
`;

// Заголовок даты
export const DateLabel = styled.p`
  font-weight: bold; /* Делает текст жирным */
  font-size: 14px; /* Устанавливает размер шрифта в 14 пикселей */
  line-height: 1px; /* Очень маленькое межстрочное расстояние */
  text-align: left; /* Выравнивает текст по левому краю */
  padding-bottom: 8px;
`;

// Стили для компонента DayPicker
export const CustomDayPicker = styled(DayPicker)`
  --rdp-day-width: 25px; /* Ширина ячейки с днём */
  --rdp-day-height: 25px; /* Высота ячейки с днём */
  --rdp-day-font: 10px 'Roboto', sans-serif; /* Шрифт и размер для ячеек с днями */
  --rdp-accent-color: gray !important; /* Цвет выделенных дней и акцентных элементов */
  --rdp-accent-background-color: gray !important; /* Цвет фона для выделенных дней */
  --rdp-day_button-border-radius: 500%; /* Округление кнопок-дней до круга */
  --rdp-nav_button-width: 19px; /* Ширина кнопок навигации */
  --rdp-nav_button-height: 19px; /* Высота кнопок навигации */
  --rdp-nav-height: 19px;
  --rdp-month_caption-font: 18px; /* Размер шрифта для заголовка месяца */
  --rdp-today-color: blue; /* Цвет для сегодняшней даты */

  

  
  color: #94a6be; /* Основной цвет текста */

  .rdp-day_today:not(.rdp-day_outside), /* Стили для текущего дня, если он не вне текущего месяца */
  .rdp-day_today.rdp-day {
    font-weight: bold !important; /* Делаем сегодняшнюю дату жирной */
    border: 16px solid #94a6be !important; /* Выделение границы для сегодняшнего дня */
  } 
  .rdp-caption_label {
    font-size: 16px; /* Устанавливает размер шрифта заголовка месяца */
    text-transform: capitalize; /* Преобразует первую букву в заглавную */
    margin-bottom: 7px; /* Добавляет отступ снизу для заголовка */
    align-items: flex-start ;
  }

  .rdp-tbody {
    font-size: 16px; /* Размер шрифта для таблицы дней */
  }



`;

// Стили для текста внизу календаря
export const FooterText = styled.p`
  font-size: 12px; /* Размер шрифта для текста в подвале */
  line-height: 0px; /* Межстрочное расстояние */
  color: #94a6be; /* Цвет текста */

  span {
    color: #000; /* Цвет текста внутри span */
    font-size: 12px; /* Размер шрифта для текста внутри span */
  }



`;

