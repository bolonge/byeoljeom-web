import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import CloseIcon from "../Icon/CloseIcon";
import AuthInput from "../Input/AuthInput";
import AuthButton from "../Button/AuthButton";
import TextButton from "../Button/TextButton";

const Container = styled.div`
  ${(props) => props.theme.whiteBox}
  display:flex;
  height: 80vh;
  width: 60%;
  min-width: ${768 * 0.9}px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 10px auto;
  padding: 20px;
  box-shadow: 0px 5px 20px #999;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 2;
  ${media.tablet} {
    width: 90%;
    min-width: 90%;
  }
  ${media.phone} {
    width: 90%;
  }
`;

const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  form {
    margin-left: 10px;
  }
`;

const ModalClose = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const LoginText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const TextContainer = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Text = styled.span`
  padding-right: 10px;
`;

interface IProp {
  show?: boolean;
  closeModal?: any;
  className?: string;
  action: string;
  setAction: any;
  emailInput: any;
  nickNameInput: any;
  passInput: any;
  secretInput: any;
  comfirmInput: any;
  onSubmit: any;
}

const AuthModalPresenter: React.FunctionComponent<IProp> = ({
  show,
  closeModal,
  className,
  action,
  setAction,
  emailInput,
  nickNameInput,
  passInput,
  secretInput,
  comfirmInput,
  onSubmit,
}) => {
  const LoginPage = () => (
    <Container className={className}>
      <ModalClose color="#999" onClick={closeModal}></ModalClose>
      <Form>
        <LoginText>로그인</LoginText>
        <form>
          <AuthInput {...nickNameInput} placeholder={"닉네임"}></AuthInput>
          <AuthInput
            {...passInput}
            placeholder={"비밀번호"}
            type={"password"}
          ></AuthInput>
          <AuthButton
            text="로그인"
            size={"mg"}
            textColor={"#6AB04C"}
            backColor={"#fff"}
            borderColor={"#6AB04C"}
            onClick={onSubmit}
          ></AuthButton>
        </form>
        <TextContainer>
          <Text>처음이신가요?</Text>
          <TextButton
            text={"회원가입"}
            size={13}
            color={"#6AB04C"}
            onClick={() => setAction("signUp")}
          ></TextButton>
        </TextContainer>
      </Form>
      <Form>
        <form></form>
      </Form>
    </Container>
  );

  const SignUpPage = () => (
    <Container className={className}>
      <ModalClose color="#999" onClick={closeModal}></ModalClose>
      <Form>
        <LoginText>회원가입</LoginText>
        <form>
          <AuthInput
            {...passInput}
            placeholder={"이메일"}
            type={"password"}
          ></AuthInput>
          <AuthButton
            text="로그인"
            size={"mg"}
            textColor={"#6AB04C"}
            backColor={"#fff"}
            borderColor={"#6AB04C"}
            onClick={onSubmit}
          ></AuthButton>
        </form>
      </Form>
      <Form>
        <form></form>
      </Form>
    </Container>
  );

  const ConfirmPage = () => (
    <Container className={className}>
      <ModalClose color="#999" onClick={closeModal}></ModalClose>
      <Form>
        <LoginText>이메일 확인</LoginText>
        <form>
          <AuthInput {...nickNameInput} placeholder={"닉네임"}></AuthInput>
          <AuthInput
            {...passInput}
            placeholder={"비밀번호"}
            type={"password"}
          ></AuthInput>
          <AuthButton
            text="로그인"
            size={"mg"}
            textColor={"#6AB04C"}
            backColor={"#fff"}
            borderColor={"#6AB04C"}
            onClick={onSubmit}
          ></AuthButton>
        </form>
      </Form>
      <Form>
        <form></form>
      </Form>
    </Container>
  );

  return action === "logIn" ? (
    <LoginPage></LoginPage>
  ) : action === "signUp" ? (
    <SignUpPage></SignUpPage>
  ) : (
    <ConfirmPage></ConfirmPage>
  );
};

export default AuthModalPresenter;
