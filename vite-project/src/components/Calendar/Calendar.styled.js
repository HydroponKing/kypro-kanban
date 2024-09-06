import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';

// Обёртка для календаря
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

`;

// Заголовок даты
export const DateLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 1px;
 text-align:  left;
`;

// Стили для компонента DayPicker
export const CustomDayPicker = styled(DayPicker)`
  --rdp-day-width: 25px;
  --rdp-day-height: 25px;
  --rdp-day-font: 12px 'Roboto', sans-serif;
  --rdp-accent-color: #94a6be;
  --rdp-accent-background-color: #f0f0f0;
  --rdp-day_button-border-radius: 50%;
  --rdp-nav_button-width: 25px;
  --rdp-nav_button-height: 25px;
  --rdp-month_caption-font: 18px;
  --rdp-today-color: black;
  
  color: #94a6be;
  
  .rdp-day_today:not(.rdp-day_outside),
  .rdp-day_today.rdp-day {
    font-weight: bold !important;
    border: 2px solid #94a6be !important; /* Дополнительно выделим границей */
  }

  .rdp-caption_label {
    font-size: 18px;
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  .rdp-tbody {
    font-size: 16px;
  }

  .rdp-day_selected,
  .rdp-day_selected:focus-visible,
  .rdp-day_selected:hover {
    background-color: #94a6be;
    color: #fff;
  }
`;



// Стили для текста внизу календаря
export const FooterText = styled.p`
  font-size: 12px;
  line-height: 0px;
  color: #94a6be;

  span {
    color: #000;
    font-size: 12px;
    line-height: 2;
  }
`;