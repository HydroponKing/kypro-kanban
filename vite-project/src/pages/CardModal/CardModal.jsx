import React from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
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

const CardModal = () => {
  const { cardId } = useParams(); // Получаем ID карточки из URL
  const navigate = useNavigate();
  const { cards } = useOutletContext(); // Получаем список карточек из контекста
  const card = cards.find((c) => c.id === Number(cardId)); // Находим нужную карточку по ID

  if (!card) {
    return <p>Карточка не найдена</p>; // Если карточка не найдена
  }

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <CardModalWrapper onClick={handleClose}>
      <CardModalContainer onClick={(e) => e.stopPropagation()}>
        <CardModalTopBlock>
          <CardModalTitle>{card.title}</CardModalTitle>
          <CategoriesThemeTop>
            <p>{card.topic}</p>
          </CategoriesThemeTop>
        </CardModalTopBlock>

        <CardModalStatus>
          <StatusLabel>Статус</StatusLabel>
          <StatusThemes>
            <StatusTheme>{card.status}</StatusTheme>
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
                value={`Описание задачи для ${card.title}`} // Пример заполнения описания
                readOnly
              />
            </FormBlock>
          </CardModalForm>
          <Calendar /> {/* Календарь с датами */}
        </CardModalWrap>

        <ButtonGroup>
          <EditButton>Редактировать задачу</EditButton>
          <DeleteButton>Удалить задачу</DeleteButton>
          <CloseButton onClick={handleClose}>Закрыть</CloseButton>
        </ButtonGroup>
      </CardModalContainer>
    </CardModalWrapper>
  );
};

export default CardModal;
