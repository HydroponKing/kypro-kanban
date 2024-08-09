import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  CardModalWrapper,
  CardModalContainer,
  CardModalTitle,
  CardModalDescription,
  CardModalDate,
  CardModalCloseButton,
} from './CardModal.styled';

const CardModal = ({ cards }) => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const card = cards.find(card => card.id === parseInt(cardId));

  if (!card) return null;

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <CardModalWrapper onClick={handleClose}>
      <CardModalContainer onClick={(e) => e.stopPropagation()}>
        <CardModalTitle>{card.title}</CardModalTitle>
        <CardModalDescription>{card.description}</CardModalDescription>
        <CardModalDate>{card.date}</CardModalDate>
        <CardModalCloseButton onClick={handleClose}>Закрыть</CardModalCloseButton>
      </CardModalContainer>
    </CardModalWrapper>
  );
};

export default CardModal;
