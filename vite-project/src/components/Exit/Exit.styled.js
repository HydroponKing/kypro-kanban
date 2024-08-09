import styled from 'styled-components';

export const ExitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); /* Затемнение фона */
  z-index: 1000;
`;

export const ExitContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
`;

export const ExitTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const ExitButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExitButtonYes = styled.button`
  width: 153px;
  height: 40px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
`;

export const ExitButtonNo = styled.button`
  width: 153px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid #565EEF;
  color: #565EEF;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;
`;
