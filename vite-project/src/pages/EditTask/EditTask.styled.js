// src/pages/EditTask/EditTask.styled.js
import styled from 'styled-components';

export const EditTaskWrapper = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EditTaskContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const EditTaskBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const EditTaskContent = styled.div`
  display: block;
  text-align: left;
`;

export const EditTaskTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const EditTaskClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  margin-bottom: 20px;
  background: transparent;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  background: transparent;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    margin-left: 10px;
    
    &:hover {
      background-color: #434baf;
    }
  }
`;
