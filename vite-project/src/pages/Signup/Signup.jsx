import React from 'react';
import { Link } from 'react-router-dom';  // Импортируем компонент Link из react-router-dom
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

const Signup = () => {
  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
              <ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
              <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
              <ModalButton id="SignUpEnter">
                <a><Link to="/Homepage">Зарегистрироваться</Link></a>
              </ModalButton>
              <ModalFormGroup>
                <p>Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link></p> {/* Используем Link для перехода */}
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default Signup;
