import React from 'react';
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
                <a href="../main.html">Зарегистрироваться</a>
              </ModalButton>
              <ModalFormGroup>
                <p>Уже есть аккаунт? <a href="signin.html">Войдите здесь</a></p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default Signup;
