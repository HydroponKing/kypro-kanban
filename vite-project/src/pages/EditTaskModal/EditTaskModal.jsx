import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TasksContext } from '../../components/TasksContext';
import { fetchTaskById } from '../../api';
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
  FormRow,
  StatusLabel,
  StatusThemes,
  StatusTheme,
  CategoriesThemeTop,
} from './EditTaskModal.styled';
import Calendar from '../../components/Calendar/Calendar';

const EditTaskModal = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { editTask, removeTask } = useContext(TasksContext);
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
      await editTask(taskId, updatedTask);
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await removeTask(taskId);
      navigate(-1);
    } catch (error) {
      console.error('Error deleting task:', error);
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
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              title="Дата завершения"
            />
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
