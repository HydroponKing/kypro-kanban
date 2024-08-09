import styled from 'styled-components';

export const CardModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CardModalContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const CardModalTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const CardModalDescription = styled.p`
  color: #000;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CardModalDate = styled.p`
  color: #94A6BE;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CardModalCloseButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #33399b;
  }
`;
