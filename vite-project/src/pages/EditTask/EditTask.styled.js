import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export const CustomDayPicker = styled(DayPicker)`
  --rdp-accent-color: #33399b;
  --rdp-accent-background-color: #f0f0f0;
  --rdp-day-font: 12px 'Roboto', sans-serif;
  --rdp-day-height: 24px;
  --rdp-day-width: 24px;
  --rdp-day_button-border-radius: 50%;
  --rdp-day_button-border: none;
  --rdp-selected-border: 1px solid #565eef;
  --rdp-today-color: #565eef;
  --rdp-nav_button-width: 24px;
  --rdp-nav_button-height: 24px;

  .rdp-caption {
    color: #94a6be;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .rdp-nav_button {
    color: #565eef;
  }
`;

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
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
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
  color: #94a6be;
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
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  background: transparent;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    margin-left: 10px;
    
    &:hover {
      background-color: #434baf;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
`;

export const DateSection = styled.div`
  width: 160px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  margin-bottom: 10px;
`;

export const DateTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #94a6be;
  margin-bottom: 10px;
`;
