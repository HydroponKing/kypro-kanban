import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api';
import { UserContext } from '../../components/UserContext'; // Исправленный путь
import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalButton,
  ErrorMessage
} from './Signin.styled';

const Signin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext); // Получаем setUser из контекста пользователя
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = await loginUser(login, password);
      localStorage.setItem('authToken', user.token); // Сохраняем токен в localStorage
      setUser(user); // Устанавливаем пользователя в контексте

      navigate('/'); // Перенаправляем на домашнюю страницу
    } catch (error) {
      setError('Ошибка авторизации. Попробуйте еще раз.');
    }
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTitle>Вход</ModalTitle>
            <ModalFormLogin onSubmit={handleLogin}>
              <ModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
                required
              />
              <ModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                required
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ModalButton type="submit">Войти</ModalButton>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Signin;
