import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ru } from 'date-fns/locale'; // Добавьте этот импорт
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
  CalendarWrapper,
  FormRow,
  StatusLabel,
  StatusThemes,
  StatusTheme,
  CategoriesThemeTop,
  DateTitle,
  StyledDayPicker,
} from './EditTaskModal.styled';
import { fetchTaskById, updateTask } from '../../api';

const EditTaskModal = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [originalTask, setOriginalTask] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadTask = async () => {
      try {
        const fetchedTask = await fetchTaskById(taskId);
        setOriginalTask(fetchedTask);
        setDescription(fetchedTask.description || '');
        setSelectedDate(new Date(fetchedTask.date) || null);
        setTopic(fetchedTask.topic || '');
        setStatus(fetchedTask.status || '');
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    loadTask();
  }, [taskId]);

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title: originalTask.title,
      description: description !== originalTask.description ? description : originalTask.description,
      date: selectedDate ? selectedDate.toISOString() : originalTask.date,
      topic: originalTask.topic,
      status: originalTask.status,
    };

    try {
      await updateTask(taskId, updatedTask);
      navigate(-1);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (!originalTask) return <p>Loading...</p>;

  return (
    <EditTaskModalWrapper>
      <EditTaskModalContainer>
        <EditTaskModalTopBlock>
          <EditTaskModalTitle>{originalTask.title}</EditTaskModalTitle>
          <CategoriesThemeTop>{topic}</CategoriesThemeTop>
          <EditTaskModalClose onClick={() => navigate(-1)}>✖</EditTaskModalClose>
        </EditTaskModalTopBlock>
        <form onSubmit={handleSave}>
          <StatusLabel>Статус</StatusLabel>
          <StatusThemes>
            <StatusTheme selected={status === 'Без статуса'} onClick={() => setStatus('Без статуса')}>Без статуса</StatusTheme>
            <StatusTheme selected={status === 'Нужно сделать'} onClick={() => setStatus('Нужно сделать')}>Нужно сделать</StatusTheme>
            <StatusTheme selected={status === 'В работе'} onClick={() => setStatus('В работе')}>В работе</StatusTheme>
            <StatusTheme selected={status === 'Тестирование'} onClick={() => setStatus('Тестирование')}>Тестирование</StatusTheme>
            <StatusTheme selected={status === 'Готово'} onClick={() => setStatus('Готово')}>Готово</StatusTheme>
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
            <CalendarWrapper>
              <DateTitle>Дата завершения</DateTitle>
              <StyledDayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={ru}  // Используйте импортированную локализацию
              />
            </CalendarWrapper>
          </FormRow>
          <ButtonGroup>
            <SaveButton type="submit">Сохранить</SaveButton>
            <CancelButton type="button" onClick={() => navigate(-1)}>Отменить</CancelButton>
          </ButtonGroup>
        </form>
      </EditTaskModalContainer>
    </EditTaskModalWrapper>
  );
};

export default EditTaskModal;
