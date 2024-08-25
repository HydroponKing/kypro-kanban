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

/* Стили для заголовка "Даты" */
export const DateTitle = styled.div`
  font-size: 14px; /* Размер шрифта */
  font-weight: 500; /* Толщина шрифта */
  color: black; /* Цвет текста */
  margin-bottom: 10px; /* Отступ снизу */
`;

export const CalendarWrapper = styled.div`
  margin-bottom: 10px; /* Отступ снизу */
  color: #94a6be; /* Цвет текста внутри контейнера */
`;

export const EditTaskModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const EditTaskModalContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border: 0.7px solid #D4DBE5;
`;

export const EditTaskModalTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const EditTaskModalTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeTop = styled.div`
  display: inline-block;
  padding: 8px 20px;
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 24px;
  margin-left: 210px;
`;

export const StatusLabel = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-align: left;
`;

export const StatusThemes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StatusTheme = styled.div`
  padding: 7px 10px 7px;
  border-radius: 24px;
  background: ${({ selected }) => (selected ? '#94A6BE' : '#EAEEF6')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#94A6BE')};
  cursor: pointer;
  margin: 4px;
`;

export const EditTaskModalClose = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #565EEF;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  color: #94A6BE;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  color: #94A6BE;
  height: 200px;
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  height: 30px;
  padding: 0 14px;
  background-color: #565EEF;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    background-color: #33399b;
  }
`;

export const CancelButton = styled.button`
  height: 30px;
  padding: 0 14px;
  background-color: transparent;
  border: 0.7px solid #565EEF;
  color: #565EEF;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    background-color: #33399b;
    color: #fff;
  }
`;
export const CloseButton = styled.button`
  height: 30px;
  padding: 0 14px;
  background-color: #565EEF;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-left: 165px;
  &:hover {
    background-color: #33399b;
  }
`;

export const DeleteButton = styled.button`
  height: 30px;
  padding: 0 14px;
  background-color: transparent;
  border: 0.7px solid #565EEF;
  color: #565EEF;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    background-color: #33399b;
    color: #fff;
  }
`;


export const CalendarWrap = styled.div`
  margin-left: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
