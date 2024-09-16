import styled from 'styled-components';

export const UserModal = styled.div`
  position: absolute;
  top: 61px;
  right: 10px;
  width: 213px;
  background-color: white;
  border: 1px solid #e6ecf5;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.1);
  z-index: 1000;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const UserModalContent = styled.div`
  p {
    margin: 10px 0;
  }
`;

export const PopUserName = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.16px;
  margin-bottom: 8px;
`;

export const PopUserMail = styled.p`
  color: #a0aec0;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.14px;
  margin-bottom: 20px;
`;

export const LogoutButton = styled.button`
  margin-bottom: 10px;
  width: 72px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #565eef;
  border-radius: 4px;
  color: #565eef;
  cursor: pointer;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: #565eef;
    color: #ffffff;
  }
`;
