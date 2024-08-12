import React from 'react';
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

const CardModal = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <CardModalWrapper onClick={handleClose}>
      <CardModalContainer onClick={(e) => e.stopPropagation()}>
        <CardModalTopBlock>
          <CardModalTitle>Название задачи</CardModalTitle>
          <CategoriesThemeTop>
            <p>Web Design</p>
          </CategoriesThemeTop>
        </CardModalTopBlock>

        <CardModalStatus>
          <StatusLabel>Статус</StatusLabel>
          <StatusThemes>
            <StatusTheme className="active">Нужно сделать</StatusTheme> {/* Оставляем только активный статус */}
          </StatusThemes>
        </CardModalStatus>

        <CardModalWrap>
          <CardModalForm>
            <FormBlock>
              <DescriptionLabel htmlFor="textArea01">Описание задачи</DescriptionLabel>
              <DescriptionArea
                id="textArea01"
                name="text"
                placeholder="Введите описание задачи..."
                readOnly
              />
            </FormBlock>
          </CardModalForm>
          <Calendar />
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
