import React from "react";
import { Link } from "react-router-dom"; // Импортируем компонент Link из react-router-dom
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
} from "./Signin.styled";

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
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalButton id="btnEnter">
                <Link to="/HomePage">Войти</Link>{" "}
              </ModalButton>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/signup">Регистрируйтесь здесь</Link>{" "}
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Signin;
