import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalButton,
  ModalFormGroup
} from './Signup.styled';
import { registerUser } from '../../api';

const Signup = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(login, name, password);
      console.log('User registered:', user);
      navigate('/signin');
    } catch (error) {
      alert('Ошибка регистрации. Почта или логин уже заняты.');
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                required
              />
              <ModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Эл. почта"
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
                Зарегистрироваться
              </ModalButton>
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
