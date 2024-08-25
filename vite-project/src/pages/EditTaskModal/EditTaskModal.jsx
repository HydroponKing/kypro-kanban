import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TasksContext } from '../../components/TasksContext'; // Импортируем контекст
import { fetchTaskById } from '../../api'; // Импортируем функцию fetchTaskById
import { ru } from 'date-fns/locale'; // Импортируем локализацию ru из date-fns
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
  CloseButton,
  DeleteButton,
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

const handleDelete = async () => {
  try {
    await removeTask(cardId); // Используем функцию из контекста
    navigate(-1);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

const EditTaskModal = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { editTask } = useContext(TasksContext); // Получаем функцию editTask из контекста
  const [originalTask, setOriginalTask] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadTask = async () => {
      try {
        const fetchedTask = await fetchTaskById(taskId);
        setOriginalTask(fetchedTask);
        setDescription(fetchedTask.description || '');
        setSelectedDate(new Date(fetchedTask.date) || null);
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
      ...originalTask,
      description,
      date: selectedDate ? selectedDate.toISOString() : originalTask.date,
      status,
    };

    try {
      await editTask(taskId, updatedTask); // Используем функцию из контекста
      navigate('/'); // Перенаправляем на главную страницу после сохранения
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
          <CategoriesThemeTop>{originalTask.topic}</CategoriesThemeTop>
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
                locale={ru}
              />
            </CalendarWrapper>
          </FormRow>
          <ButtonGroup>
            <SaveButton type="submit">Сохранить</SaveButton>
            <CancelButton type="button" onClick={() => navigate('/')}>Отменить</CancelButton>
            <DeleteButton onClick={handleDelete}>Удалить задачу</DeleteButton>
            <CloseButton type="button" onClick={() => navigate('/')}>Закрыть</CloseButton>
          </ButtonGroup>
        </form>
      </EditTaskModalContainer>
    </EditTaskModalWrapper>
  );
};

export default EditTaskModal;
