// pages/CardModal/CardModal.jsx
import React from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar';
import {
  CardModalWrapper,
  CardModalContainer,
  CardModalTitle,
  CardModalDescription,
  CardModalStatus,
  CardModalStatusLabel,
  CardModalActions,
  CardModalEditButton,
  CardModalDeleteButton,
  CardModalCloseButton,
  CardModalContent
} from './CardModal.styled';

const CardModal = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const { cards } = useOutletContext(); // Получаем cards из Outlet

  const card = cards.find(card => card.id === parseInt(cardId));

  if (!card) return <div>Card not found</div>;

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <CardModalWrapper onClick={handleClose}>
      <CardModalContainer onClick={(e) => e.stopPropagation()}>
        <CardModalTitle>{card.title}</CardModalTitle>
        <CardModalStatus>
          <CardModalStatusLabel>Статус</CardModalStatusLabel>
          <div>{card.status}</div>
        </CardModalStatus>

        <CardModalContent>
          <CardModalDescription value={card.description || "Описание задачи"} readOnly />
          <div>
            <Calendar />
          </div>
        </CardModalContent>

        <CardModalActions>
          <CardModalEditButton>Редактировать задачу</CardModalEditButton>
          <CardModalDeleteButton>Удалить задачу</CardModalDeleteButton>
          <CardModalCloseButton onClick={handleClose}>Закрыть</CardModalCloseButton>
        </CardModalActions>
      </CardModalContainer>
    </CardModalWrapper>
  );
};

export default CardModal;
