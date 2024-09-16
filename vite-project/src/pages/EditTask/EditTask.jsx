import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TasksContext } from '../../components/TasksContext';
import {
  EditTaskWrapper,
  EditTaskContainer,
  EditTaskBlock,
  EditTaskContent,
  EditTaskTitle,
  EditTaskClose,
  FormGroup,
  Input,
  Textarea,
  ButtonGroup,
  FormRow,
  LeftColumn,
  DateSection,
  Tag,
  TagContainer,
  TagTitle,
  ErrorMessage,
} from './EditTask.styled';
import Calendar from '../../components/Calendar/Calendar';

const EditTask = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TasksContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // Установим текущую дату по умолчанию
  const [topic, setTopic] = useState('Research');
  const [errors, setErrors] = useState({});

  const handleSave = async (e) => {
    e.preventDefault();

    setErrors({});

    const newErrors = {};
    if (!title) newErrors.title = 'Введите название задачи';
    if (!description) newErrors.description = 'Введите описание задачи';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTask = {
      title,
      topic,
      description,
      date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
      status: 'Без статуса',
    };

    try {
      await addTask(newTask);
      navigate(-1);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <EditTaskWrapper>
      <EditTaskContainer>
        <EditTaskBlock>
          <EditTaskContent>
            <EditTaskTitle>Создание задачи</EditTaskTitle>
            <EditTaskClose onClick={handleCancel}>✖</EditTaskClose>
            <form onSubmit={handleSave}>
              <FormRow>
                <LeftColumn>
                  <FormGroup>
                    <label htmlFor="formTitle">Название задачи</label>
                    <Input
                      id="formTitle"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Введите название задачи..."
                      style={{
                        borderColor: errors.title ? 'red' : 'inherit',
                      }}
                    />
                    {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="textArea">Описание задачи</label>
                    <Textarea
                      id="textArea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Введите описание задачи..."
                      style={{
                        borderColor: errors.description ? 'red' : 'inherit',
                      }}
                    />
                    {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                  </FormGroup>
                </LeftColumn>
                <DateSection>
                  <Calendar
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate} // Передаем функцию для изменения даты
                    title="Даты"
                  />
                </DateSection>
              </FormRow>
              <FormGroup>
                <TagTitle>Категория</TagTitle>
                <TagContainer>
                  {['Web Design', 'Research', 'Copywriting'].map((t) => (
                    <Tag
                      key={t}
                      topic={t}
                      selected={topic === t}
                      onClick={() => setTopic(t)}
                    >
                      {t}
                    </Tag>
                  ))}
                </TagContainer>
              </FormGroup>
              {Object.keys(errors).length > 0 && (
                <ErrorMessage>Заполните обязательные поля перед созданием задачи</ErrorMessage>
              )}
              <ButtonGroup>
                <button type="submit">Создать задачу</button>
              </ButtonGroup>
            </form>
          </EditTaskContent>
        </EditTaskBlock>
      </EditTaskContainer>
    </EditTaskWrapper>
  );
};

export default EditTask;
