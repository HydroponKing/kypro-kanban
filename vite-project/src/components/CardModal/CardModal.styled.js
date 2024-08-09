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
  max-width: 700px;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardModalStatus = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const CardModalStatusLabel = styled.div`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 8px;
`;

export const CardModalTitle = styled.h3`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`;

export const CardModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const CardModalDescription = styled.textarea`
  width: 55%;  ////
  height: 240px;  
  padding: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
  background-color: #f8f9fa;
  resize: none;
`;

export const CardModalDate = styled.p`
  color: #94A6BE;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CardModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const CardModalCloseButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const CardModalEditButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #565EEF;
  font-size: 16px;
  font-weight: 500;
  color: #565EEF;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
`;

export const CardModalDeleteButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #FF6D00;
  font-size: 16px;
  font-weight: 500;
  color: #FF6D00;
  cursor: pointer;

  &:hover {
    background-color: #FF6D00;
    color: #FFFFFF;
  }
`;
