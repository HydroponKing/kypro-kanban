import React, { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
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
  CalendarWrapper,
  DateTitle,
  StyledDayPicker,
  Tag,
  TagContainer,
  TagTitle,
} from './EditTask.styled';
import { createTask } from '../../api';

const EditTask = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const { onSave } = useOutletContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [topic, setTopic] = useState('Research');

  const handleSave = async (e) => {
    e.preventDefault();

    const newTask = {
      title: title || 'Новая задача',
      topic,
      description: description || '',
      date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
      status: 'Без статуса',
    };

    try {
      const updatedTasks = await createTask(newTask);
      onSave(updatedTasks);
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
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="textArea">Описание задачи</label>
                    <Textarea
                      id="textArea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Введите описание задачи..."
                    />
                  </FormGroup>
                </LeftColumn>
                <DateSection>
                  <DateTitle>Даты</DateTitle>
                  <CalendarWrapper>
                    <StyledDayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={ru}
                    />
                    {selectedDate && (
                      <p style={{ color: '#94A6BE', marginTop: '10px', fontSize: '10px' }}>
                        Срок исполнения: {format(selectedDate, 'dd.MM.yyyy')}
                      </p>
                    )}
                  </CalendarWrapper>
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
