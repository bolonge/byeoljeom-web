import React, { useState } from "react";
import styled, { ThemeProvider } from "../../typed-components";
import Theme from "../../Styles/Theme";
import GlobalStyles from "../../Styles/GlobalStyles";
import Header from "../Header";
import TextButton from "../Button/TextButton";
import AppRoutes from "./AppRoutes";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";
import Modal from "../../Components/Modal";
import AuthButton from "../../Components/Button/AuthButton";
import { media } from "../../Styles/MediaSize";
import { ME, HomeUserProp } from "../../ShareQueries";
import { useQuery } from "@apollo/react-hooks";

const OverlayMask = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  transition: opacity 0.2s ease;
  z-index: 1;
`;

const MainHeader = styled(Header)``;

const ButtonContainer = styled.div`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${media.tablet} {
    width: 300px;
    min-width: 200px;
  }
  ${media.phone} {
    display: none;
  }
`;

const LoginButton = styled(TextButton)`
  margin-right: 30px;
`;

function App() {
  const isLoggedIn = useIsLoggedIn();
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("logIn");
  const { data: userData } = useQuery<HomeUserProp>(ME, {
    skip: !isLoggedIn,
  });

  const openModal = (location: string) => {
    setShow(true);
    if (location === "signUp") {
      setAction("signUp");
    } else {
      setAction("logIn");
    }
  };

  const closeModal = () => setShow(false);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        {show && <OverlayMask onClick={closeModal} />}
        {show && <Modal action={action} closeModal={closeModal}></Modal>}
        <MainHeader url={isLoggedIn ? userData?.avatar : undefined}>
          {isLoggedIn ? null : (
            <ButtonContainer>
              <LoginButton
                text="로그인"
                size={16}
                onClick={() => openModal("logIn")}
                color={"#6AB04C"}
              ></LoginButton>
              <AuthButton
                text="회원가입"
                textColor={"#fff"}
                backColor={"#6AB04C"}
                borderColor={"#6AB04C"}
                onClick={() => openModal("signUp")}
              ></AuthButton>
            </ButtonContainer>
          )}
        </MainHeader>
        <AppRoutes isLoggedIn={isLoggedIn}></AppRoutes>
      </>
    </ThemeProvider>
  );
}

export default App;
