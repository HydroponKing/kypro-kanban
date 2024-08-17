// src/pages/EditTask/EditTask.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditTaskWrapper, FormGroup, ButtonGroup, Input, Textarea, EditTaskContainer, EditTaskBlock, EditTaskContent, EditTaskTitle, EditTaskClose } from './EditTask.styled';

const EditTask = ({ onSave }) => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: cardId,
      title,
      description,
    };
    onSave(updatedTask);
    navigate(-1); // Возвращаемся назад после сохранения
  };

  const handleCancel = () => {
    navigate(-1); // Возвращаемся назад при отмене
  };

  return (
    <EditTaskWrapper>
      <EditTaskContainer>
        <EditTaskBlock>
          <EditTaskContent>
            <EditTaskTitle>Создание задачи</EditTaskTitle>
            <EditTaskClose onClick={handleCancel}>✖</EditTaskClose>
            <div>
              <form onSubmit={handleSave}>
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
                <ButtonGroup>
                  <button type="submit">Создать задачу</button>
                </ButtonGroup>
              </form>
            </div>
          </EditTaskContent>
        </EditTaskBlock>
      </EditTaskContainer>
    </EditTaskWrapper>
  );
};

export default EditTask;
