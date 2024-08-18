import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledDayPicker, EditTaskWrapper, EditTaskContainer, EditTaskBlock, EditTaskContent, EditTaskTitle, EditTaskClose, FormGroup, Input, Textarea, ButtonGroup, FormRow, LeftColumn, DateSection, CalendarWrapper, DateTitle, Tag, TagContainer, TagTitle } from './EditTask.styled';

const EditTask = ({ onSave }) => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: cardId,
      title,
      description,
      date: selectedDate,
      topic: selectedTopic || 'Research',
    };
    onSave(updatedTask);
    navigate(-1);
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
              <TagTitle>Категория</TagTitle>
              <TagContainer>
                {['Web Design', 'Copywriting', 'Research'].map(topic => (
                  <Tag
                    key={topic}
                    selected={selectedTopic === topic}
                    onClick={() => setSelectedTopic(topic)}
                    topic={topic}
                  >
                    {topic}
                  </Tag>
                ))}
              </TagContainer>
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
