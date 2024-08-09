import React from 'react';
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

const Signin = () => {
  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
              <ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
              <ModalButton id="btnEnter">
                <a href="../main.html">Войти</a>
              </ModalButton>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <a href="signup.html">Регистрируйтесь здесь</a>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Signin;
