import React, { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { StyledDayPicker, EditTaskWrapper, EditTaskContainer, EditTaskBlock, EditTaskContent, EditTaskTitle, EditTaskClose, FormGroup, Input, Textarea, ButtonGroup, FormRow, LeftColumn, DateSection, CalendarWrapper, DateTitle } from './EditTask.styled';
import { createTask } from '../../api';
import { topicStyles } from './EditTask.styled';

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
                    />
                  </CalendarWrapper>
                </DateSection>
              </FormRow>
              <FormGroup>
                <label>Категория</label>
                <div>
                  {['Web Design', 'Research', 'Copywriting'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      style={{
                        backgroundColor: topic === t ? topicStyles[t].backgroundColor : '#f0f0f0',
                        color: topic === t ? topicStyles[t].color : '#000',
                        marginRight: '10px',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onClick={() => setTopic(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
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
