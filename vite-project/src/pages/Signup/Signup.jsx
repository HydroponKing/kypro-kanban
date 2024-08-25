import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../api';
import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalButton,
  ModalFormGroup,
  ErrorMessage
} from './Signup.styled';

const Signup = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inputErrors, setInputErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Сбрасываем ошибки
    setError('');
    setInputErrors({});

    const newErrors = {};
    if (!name.trim()) newErrors.name = true;
    if (!login.trim()) newErrors.login = true;
    if (!password.trim()) newErrors.password = true;

    if (Object.keys(newErrors).length > 0) {
      setInputErrors(newErrors);
      setError('Введенные вами данные некорректны. Чтобы завершить регистрацию, заполните все поля в форме.');
      return;
    }

    try {
      await registerUser(login, name, password);
      navigate('/signin');
    } catch (error) {
      setError('Введенные вами данные некорректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.');
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (inputErrors[field]) {
      setInputErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <ModalFormLogin onSubmit={handleRegister}>
              <ModalInput
                type="text"
                value={name}
                onChange={handleInputChange(setName, 'name')}
                placeholder="Имя"
                hasError={inputErrors.name} // Используем hasError для подсветки
              />
              <ModalInput
                type="text"
                value={login}
                onChange={handleInputChange(setLogin, 'login')}
                placeholder="Эл. почта"
                hasError={inputErrors.login}
              />
              <ModalInput
                type="password"
                value={password}
                onChange={handleInputChange(setPassword, 'password')}
                placeholder="Пароль"
                hasError={inputErrors.password}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ModalButton type="submit">Зарегистрироваться</ModalButton>
              <ModalFormGroup>
                <p>Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link></p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default Signup;
