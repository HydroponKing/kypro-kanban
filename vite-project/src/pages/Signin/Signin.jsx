import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalButton,
  ModalFormGroup
} from './Signin.styled';
import { loginUser } from '../../api';

const Signin = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(login, password);
      console.log('User logged in:', user);
      localStorage.setItem('authToken', user.token);
      onLogin();
      navigate('/'); // Перенаправляем на главную страницу после успешного входа
    } catch (error) {
      alert('Ошибка авторизации. Неверный логин или пароль.');
    }
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
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
              <ModalButton type="submit">
                Войти
              </ModalButton>
              <ModalFormGroup>
                <p>Еще нет аккаунта? <Link to="/signup">Зарегистрируйтесь здесь</Link></p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Signin;
