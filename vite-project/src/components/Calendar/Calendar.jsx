import React from 'react';
import * as Styled from './Calendar.styled';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

// Функция для преобразования первой буквы в заглавную
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Настройка локализации с изменением отображения месяца
const customLocale = {
  ...ru,
  localize: {
    ...ru.localize,
    month: (n) => capitalizeFirstLetter(ru.localize.month(n)),
  },
};

const Calendar = ({ selectedDate, onDateChange }) => {  // Исправлено на onDateChange
  return (
    <Styled.CalendarContainer>
      <Styled.DateLabel>Даты</Styled.DateLabel>
      <Styled.CustomDayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onDateChange}  // Исправлено на onSelect
        locale={customLocale}
        weekStartsOn={1}
      />
      <Styled.FooterText>
        Срок исполнения:
        <span>{selectedDate && format(selectedDate, 'dd.MM.yyyy')}</span>
      </Styled.FooterText>
    </Styled.CalendarContainer>
  );
};

export default Calendar;
