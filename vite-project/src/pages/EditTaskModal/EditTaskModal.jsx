import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { fetchTaskById, updateTask } from '../../api';
import Calendar from '../../components/Calendar/Calendar';

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
  
    // Проверка изменений и отправка только описания, если оно было изменено
    const updatedTask = {
      title: originalTask.title, // Заголовок остаётся неизменным
      description: description !== originalTask.description ? description : originalTask.description,
      date: originalTask.date, // Дата остаётся неизменной
      topic: originalTask.topic, // Тема остаётся неизменной
      status: originalTask.status, // Статус остаётся неизменным
    };
  
    try {
      console.log('Отправляем обновленные данные задачи:', updatedTask);
      const updatedTasks = await updateTask(taskId, updatedTask);
      console.log('Updated tasks:', updatedTasks); // Логирование для проверки
      navigate(-1); // Вернуться после сохранения
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
            <CalendarWrap>
              <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
            </CalendarWrap>
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
