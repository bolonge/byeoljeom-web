import React, { useState } from "react";
import styled, { ThemeProvider } from "../../typed-components";
import Theme from "../../Styles/Theme";
import GlobalStyles from "../../Styles/GlobalStyles";
import AppPresenter from "./AppPresenter";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";
import Modal from "../../Components/Modal";
import { ME, HomeUserPropData } from "../../ShareQueries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { media } from "../../Styles/MediaSize";
import { LOG_OUT } from "./AppQuries";

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

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(101, 166, 74, 0.18);
  ${media.phone} {
    margin-top: 60px;
  }
`;

function App() {
  const isLoggedIn = useIsLoggedIn();
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [action, setAction] = useState("logIn");
  const [logOutMutation] = useMutation(LOG_OUT);
  const { data: userData } = useQuery<HomeUserPropData>(ME, {
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

  const toggleMenu = () => {
    setMenu((m) => !m);
  };

  const toggleProfileMenu = () => {
    setProfile((p) => !p);
  };

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        {show && <OverlayMask onClick={closeModal} />}
        {show && <Modal action={action} closeModal={closeModal}></Modal>}
        <Wrapper>
          <AppPresenter
            isLoggedIn={isLoggedIn}
            url={userData?.me.avatar}
            nickName={userData?.me.nickName}
            menu={menu}
            toggleMenu={toggleMenu}
            profileMenu={profile}
            toggleProfileMenu={toggleProfileMenu}
            openModal={openModal}
            logOut={logOutMutation}
          ></AppPresenter>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
