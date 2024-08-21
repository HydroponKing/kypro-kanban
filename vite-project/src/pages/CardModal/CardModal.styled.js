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



export const CardModalWrapper = styled.div`
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

export const CardModalContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border: 0.7px solid #D4DBE5;
`;

export const CardModalTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const CardModalTitle = styled.h3`
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
  opacity: 1;
`;

export const CardModalStatus = styled.div`
  margin-bottom: 11px;
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
`;

export const StatusTheme = styled.div`
  padding: 11px 14px;
  border-radius: 24px;
  background: #94A6BE;
  color: #FFFFFF;
  border: none;
`;

export const CardModalWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardModalForm = styled.form`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  padding-bottom: 14px;
`;

export const DescriptionArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  color: #94A6BE;
  height: 200px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const EditButton = styled.button`
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

export const DeleteButton = styled(EditButton)`
  margin-right: 8px;
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

  &:hover {
    background-color: #33399b;
  }
`;
