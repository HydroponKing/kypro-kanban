import React, { useState } from 'react';
import {
  EditTaskModalWrapper,
  EditTaskModalContainer,
  EditTaskModalTopBlock,
  EditTaskModalTitle,
  EditTaskModalClose,
  FormGroup,
  Textarea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  DeleteButton,
  CloseButton,
  CalendarWrap,
  FormRow,
  StatusLabel,
  StatusThemes,
  StatusTheme,
  CategoriesThemeTop,
} from './EditTaskModal.styled';
import Calendar from '../../components/Calendar/Calendar';

const EditTaskModal = () => {
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [topic, setTopic] = useState('Web Design');

  return (
    <EditTaskModalWrapper>
      <EditTaskModalContainer>
        <EditTaskModalTopBlock>
          <EditTaskModalTitle>Название задачи</EditTaskModalTitle>
          <CategoriesThemeTop>{topic}</CategoriesThemeTop>
          <EditTaskModalClose>✖</EditTaskModalClose>
        </EditTaskModalTopBlock>
        <form>
          <StatusLabel>Статус</StatusLabel>
          <StatusThemes>
            <StatusTheme selected>Без статуса</StatusTheme>
            <StatusTheme>Нужно сделать</StatusTheme>
            <StatusTheme>В работе</StatusTheme>
            <StatusTheme>Тестирование</StatusTheme>
            <StatusTheme>Готово</StatusTheme>
          </StatusThemes>
          <FormRow>
            <FormGroup>
              <label htmlFor="textArea">Описание задачи</label>
              <Textarea
                id="textArea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите описание задачи..."
              />
            </FormGroup>
            <CalendarWrap>
              <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
            </CalendarWrap>
          </FormRow>
          <ButtonGroup>
            <SaveButton type="submit">Сохранить</SaveButton>
            <CancelButton type="button">Отменить</CancelButton>
            <DeleteButton type="button">Удалить задачу</DeleteButton>
            <CloseButton type="button">Закрыть</CloseButton>
          </ButtonGroup>
        </form>
      </EditTaskModalContainer>
    </EditTaskModalWrapper>
  );
};

export default EditTaskModal;
