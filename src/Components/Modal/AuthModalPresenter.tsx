import React, { useState, useEffect } from "react";
import styled from "../../typed-components";
// import { GoogleLogin } from "react-google-login";
import { media } from "../../Styles/MediaSize";
import CloseIcon from "../Icon/CloseIcon";
import AuthInput from "../Input/AuthInput";
import AuthButton from "../Button/AuthButton";
import TextButton from "../Button/TextButton";
import Spinner from "../Spinner";

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

const EmailBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const EmailClose = styled(CloseIcon)<{ disable: boolean }>`
  position: relative;
  display: ${(props) => (props.disable ? "flex" : "none")};
  top: 35px;
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

const TimerContainer = styled.div`
  margin-top: 20px;
  height: 20px;
`;

const Timer = styled.span<{ disable: boolean }>`
  position: relative;
  display: ${(props) => (props.disable ? "flex" : "none")};
`;

const MessageContainer = styled.div`
  position: absolute;
  margin-top: 20px;
`;

const Message = styled.span`
  color: ${(props) => props.theme.mainColor};
`;

interface IProp {
  loading?: boolean;
  requestLoading?: boolean;
  closeModal?: any;
  className?: string;
  action?: string;
  setAction: any;
  message: string;
  setMessage: any;
  requestCode: any;
  emailCheck: boolean;
  setEmailCheck: any;
  overTime: boolean;
  setOverTime: any;
  emailInput: any;
  nickNameInput: any;
  passInput: any;
  confirmInput: any;
  onSubmit: any;
}

const AuthModalPresenter: React.FunctionComponent<IProp> = ({
  loading,
  requestLoading,
  closeModal,
  className,
  action,
  setAction,
  message,
  setMessage,
  requestCode,
  emailCheck,
  setEmailCheck,
  overTime,
  setOverTime,
  emailInput,
  nickNameInput,
  passInput,
  confirmInput,
  onSubmit,
}) => {
  // const responseGoogle = (response: any) => {
  //   console.log(response);
  // };
  const [count, setCount] = useState(180);
  const [time, setTime] = useState<any>();
  const countDown = () => {
    setCount((a) => a - 1);
  };

  useEffect(() => {
    if (count === 0) {
      setMessage("시간이 초과 되었습니다");
      clearInterval(time);
      setCount(180);
    }
  }, [count]);

  return (
    <Container className={className}>
      <ModalClose color="#999" onClick={closeModal}></ModalClose>
      <Form>
        {action === "logIn" && (
          <>
            <LoginText>로그인</LoginText>
            <form onSubmit={onSubmit}>
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
              >
                {loading ? <Spinner /> : null}
              </AuthButton>
              <MessageContainer>
                <Message>{message}</Message>
              </MessageContainer>
            </form>
            <TextContainer>
              <Text>처음이신가요?</Text>
              <TextButton
                text={"회원가입"}
                size={13}
                color={"#6AB04C"}
                onClick={() => {
                  setAction("signUp");
                  nickNameInput.setValue("");
                  passInput.setValue("");
                }}
              ></TextButton>
            </TextContainer>
          </>
        )}
        {action === "signUp" && (
          <>
            <LoginText>회원가입</LoginText>
            <form onSubmit={onSubmit}>
              <AuthInput
                {...nickNameInput}
                placeholder={"닉네임"}
                type={"text"}
              ></AuthInput>
              <AuthInput
                {...passInput}
                placeholder={"비밀번호"}
                type={"password"}
              ></AuthInput>
              <AuthInput
                {...emailInput}
                placeholder={"이메일"}
                type={"email"}
              ></AuthInput>
              <AuthButton
                text="이메일 확인"
                size={"mg"}
                textColor={"#6AB04C"}
                backColor={"#fff"}
                borderColor={"#6AB04C"}
                onClick={onSubmit}
              >
                {loading ? <Spinner /> : null}
              </AuthButton>
              <MessageContainer>
                <Message>{message}</Message>
              </MessageContainer>
            </form>
            <TextContainer>
              <TextButton
                text={"로그인 화면으로"}
                size={13}
                color={"#6AB04C"}
                onClick={() => {
                  setAction("logIn");
                  nickNameInput.setValue("");
                  passInput.setValue("");
                  emailInput.setValue("");
                }}
              ></TextButton>
            </TextContainer>
          </>
        )}
        {action === "confirm" && (
          <>
            <LoginText>이메일 확인</LoginText>
            <form>
              <EmailBox>
                <AuthInput
                  {...emailInput}
                  placeholder={"이메일"}
                  disable={emailCheck}
                ></AuthInput>
                <EmailClose
                  color="#999"
                  size={10}
                  onClick={() => setEmailCheck(false)}
                  disable={emailCheck}
                />
              </EmailBox>
              <AuthButton
                text="코드 보내기"
                size={"mg"}
                textColor={"#6AB04C"}
                backColor={"#fff"}
                onClick={() => {
                  if (emailCheck) {
                    console.log("잠시 후에 시도해 주세요");
                  } else {
                    if (overTime) {
                      setMessage("이메일을 확인해주세요");
                    } else {
                      requestCode();
                      setTime(setInterval(countDown, 1000));
                    }
                  }
                }}
                borderColor={"#6AB04C"}
              >
                {requestLoading ? <Spinner /> : null}
              </AuthButton>
              <TimerContainer>
                <Timer
                  disable={emailCheck ? (overTime ? false : true) : emailCheck}
                >
                  {`
              ${Math.floor(count / 60)} : ${
                    (count % 120 === 60
                      ? "00"
                      : count >= 120
                      ? count % 120
                      : count % 60
                    ).toString().length === 2
                      ? count % 120 === 60
                        ? "00"
                        : count >= 120
                        ? count % 120
                        : count % 60
                      : `0${
                          count % 120 === 60
                            ? "00"
                            : count >= 120
                            ? count % 120
                            : count % 60
                        }`
                  }`}
                </Timer>
              </TimerContainer>
              <AuthInput
                {...confirmInput}
                placeholder={"시크릿 코드"}
                type={"password"}
              ></AuthInput>
              <AuthButton
                text="확인하기"
                size={"mg"}
                textColor={"#6AB04C"}
                backColor={"#fff"}
                onClick={onSubmit}
                borderColor={"#6AB04C"}
              >
                {loading ? <Spinner /> : null}
              </AuthButton>
              <MessageContainer>
                <Message>{message}</Message>
              </MessageContainer>
            </form>
            <TextContainer>
              <TextButton
                text={"로그인 화면으로"}
                size={13}
                color={"#6AB04C"}
                onClick={() => {
                  setAction("logIn");
                  emailInput.setValue("");
                }}
              ></TextButton>
            </TextContainer>
          </>
        )}
      </Form>
      <Form>
        <form>
          {/* <GoogleLogin
            clientId="445431490120-o04ktdsg2qvtdktld3bjev0ce6g8pvs3.apps.googleusercontent.com"
            buttonText="구글로 시작하기"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </form>
      </Form>
    </Container>
  );
};

export default AuthModalPresenter;
