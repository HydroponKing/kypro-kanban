import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  flex: 1 0 21%;
  max-width: 220px;
  margin: 10px;
  box-sizing: border-box;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
