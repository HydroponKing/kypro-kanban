import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем Link и useNavigate
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

const Signin = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(); 
    navigate("/"); 
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
            <ModalFormLogin id="formLogIn" onSubmit={handleLogin}>
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
              <ModalButton id="btnEnter" type="submit">
                Войти
              </ModalButton>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/signup">Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Signin;
