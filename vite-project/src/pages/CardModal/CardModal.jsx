import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar';
import {
  CardModalWrapper,
  CardModalContainer,
  CardModalTopBlock,
  CardModalTitle,
  CategoriesThemeTop,
  CardModalStatus,
  StatusLabel,
  StatusThemes,
  StatusTheme,
  CardModalWrap,
  CardModalForm,
  FormBlock,
  DescriptionLabel,
  DescriptionArea,
  ButtonGroup,
  EditButton,
  DeleteButton,
  CloseButton,
} from './CardModal.styled';
import { fetchTaskById, deleteTask } from '../../api';

const CardModal = () => {
  const { cardId } = useParams(); // Получаем ID карточки из URL
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCard = async () => {
      try {
        const fetchedCard = await fetchTaskById(cardId);
        setCard(fetchedCard);
      } catch (error) {
        console.error('Error fetching card:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [cardId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!card) {
    return <p>Карточка не найдена</p>; // Если карточка не найдена
  }

  const handleClose = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/edit-task-modal/${cardId}`); // Переход на страницу редактирования
  };

  const handleDelete = async () => {
    try {
      await deleteTask(cardId);
      navigate(-1); // Возвращаемся после удаления
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <CardModalWrapper onClick={handleClose}>
      <CardModalContainer onClick={(e) => e.stopPropagation()}>
        <CardModalTopBlock>
          <CardModalTitle>{card.title || 'Заголовок отсутствует'}</CardModalTitle>
          <CategoriesThemeTop>
            <p>{card.topic || 'Тема отсутствует'}</p>
          </CategoriesThemeTop>
        </CardModalTopBlock>

        <CardModalStatus>
          <StatusLabel>Статус</StatusLabel>
          <StatusThemes>
            <StatusTheme>{card.status || 'Без статуса'}</StatusTheme>
          </StatusThemes>
        </CardModalStatus>

        <CardModalWrap>
          <CardModalForm>
            <FormBlock>
              <DescriptionLabel htmlFor="textArea01">Описание задачи</DescriptionLabel>
              <DescriptionArea
                id="textArea01"
                name="text"
                placeholder="Описание задачи"
                value={card.description || 'Описание отсутствует'}
                readOnly
              />
            </FormBlock>
          </CardModalForm>
          <Calendar />
        </CardModalWrap>

        <ButtonGroup>
          <EditButton onClick={handleEdit}>Редактировать задачу</EditButton>
          <DeleteButton onClick={handleDelete}>Удалить задачу</DeleteButton>
          <CloseButton onClick={handleClose}>Закрыть</CloseButton>
        </ButtonGroup>
      </CardModalContainer>
    </CardModalWrapper>
  );
};

export default CardModal;
