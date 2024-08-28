import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ru } from 'date-fns/locale';

export const StyledDayPicker = styled(DayPicker).attrs({
  locale: ru,
  captionLayout: 'label',
  showOutsideDays: true,
})`
  /* Используемые CSS переменные */
  --rdp-accent-color:black ; /* Цвет текста выбранного дня */
  --rdp-accent-background-color: #94A6BE; /* Цвет фона выбранного дня */
  --rdp-day-font: 12px 'Roboto', sans-serif;
  --rdp-day-height: 22px;
  --rdp-day-width: 22px;
  --rdp-day_button-border-radius: 50%; /* Делаем ячейки дней круглыми */
  --rdp-day_button-border: none;
  --rdp-selected-border: none;
  --rdp-nav_button-width: 20px;

  .rdp-day:hover {
    background-color: rgba(86, 94, 239, 0.1) !important; /* Цвет фона при наведении */
  }
 

  .rdp-caption_label {
    color: #94a6be !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    margin-bottom: 8px !important;
    text-transform: capitalize !important;
  }
`;

  
/* Стили для контейнера календаря */
export const CalendarWrapper = styled.div`
  margin-bottom: 10px; /* Отступ снизу */
  color: #94a6be; /* Цвет текста внутри контейнера */
`;

/* Стили для заголовка "Даты" */
export const DateTitle = styled.div`
  font-size: 14px; /* Размер шрифта */
  font-weight: 500; /* Толщина шрифта */
  color: black; /* Цвет текста */
  margin-bottom: 10px; /* Отступ снизу */
`;

export const topicStyles = {
  'Web Design': {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  'Copywriting': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  'Research': {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  }
};

export const Tag = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? '1' : '0.5')};
  background-color: ${({ topic }) => topicStyles[topic]?.backgroundColor || '#f1f1f1'};
  color: ${({ topic }) => topicStyles[topic]?.color || '#000'};
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    opacity: 1;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TagTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin-bottom: 16px;
`;

export const EditTaskWrapper = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EditTaskContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const EditTaskBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const EditTaskContent = styled.div`
  display: block;
  text-align: left;
`;

export const EditTaskTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const EditTaskClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  margin-bottom: 20px;
  background: transparent;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  background: transparent;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    margin-left: 10px;
    
    &:hover {
      background-color: #434baf;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
`;

export const DateSection = styled.div`
  width: 160px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;