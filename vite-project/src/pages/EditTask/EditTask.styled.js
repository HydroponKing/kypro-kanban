import styled from 'styled-components';
import 'react-day-picker/style.css';

export const topicStyles = {
  'Web Design': {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  'Copywriting': {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  'Research': {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  }
};

export const Tag = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? '1' : '0.5')};
  background-color: ${({ topic }) => topicStyles[topic]?.backgroundColor || '#f1f1f1'};
  color: ${({ topic }) => topicStyles[topic]?.color || '#000'};
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    opacity: 1;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`; 

export const TagTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin-bottom: 16px;
  margin-top: 16px;
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
  font-size: 22px;
  font-weight: 300;
  line-height: 29px;
  margin-bottom: 18px;
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
  margin-bottom: 6px;
  
  label {
    display: block;
    margin-bottom: 16px;
    font-weight: bold;
    color: #000;
    font-size: 15px;
    font-weight: 300;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  margin-bottom: 20px;
  background: transparent;
  color: rgba(148, 166, 190, 0.4); 

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Textarea = styled.textarea`
  width: 95%;
  height: 200px;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  background: transparent;
  color: rgba(148, 166, 190, 0.4); 
  
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

  button {
    padding: 8px 20px;
    font-size: 11,5px;
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
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;