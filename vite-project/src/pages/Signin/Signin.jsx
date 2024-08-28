import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../api';
import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalButton,
  ModalFormGroup,
  ErrorMessage
} from './Signin.styled';

const Signin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inputErrors, setInputErrors] = useState({}); // Для отслеживания ошибок в полях ввода
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Сброс ошибок перед проверкой
    setError('');
    setInputErrors({});

    const newErrors = {};

    if (!login.trim()) {
      newErrors.login = true;
    }
    if (!password.trim()) {
      newErrors.password = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setInputErrors(newErrors);
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    try {
      const user = await loginUser(login, password);
      localStorage.setItem('authToken', user.token);
      navigate('/');
    } catch (error) {
      setError('Ошибка авторизации. Неверный логин или пароль.');
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (inputErrors[field]) {
      setInputErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
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
                onChange={handleInputChange(setLogin, 'login')}
                placeholder="Логин"
                hasError={inputErrors.login} // Передаем статус ошибки для подсветки
              />
              <ModalInput
                type="password"
                value={password}
                onChange={handleInputChange(setPassword, 'password')}
                placeholder="Пароль"
                hasError={inputErrors.password} // Передаем статус ошибки для подсветки
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ModalButton type="submit">Войти</ModalButton>
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
