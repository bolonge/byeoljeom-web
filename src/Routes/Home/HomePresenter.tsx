import React, { useState } from "react";
import styled from "../../typed-components";
import Header from "../../Components/Header";
import { media } from "../../Styles/MediaSize";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";
import Modal from "../../Components/Modal";
import AuthButton from "../../Components/Button/AuthButton";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";
import TextButton from "../../Components/Button/TextButton";

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

const Wrapper = styled.div``;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(101, 166, 74, 0.18);
`;

const MainPage = styled.div`
  width: 60%;
  min-width: 768px;
  min-height: 100vh;
  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    width: 100%;
  }
`;

const LoginButton = styled(TextButton)`
  margin-right: 30px;
`;

interface IProp {
  reviewData: any;
  userData: any;
  loading: boolean;
}

const HomePresenter: React.FunctionComponent<IProp> = ({
  reviewData,
  userData,
  loading,
}) => {
  const isLoggedIn = useIsLoggedIn();
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("logIn");
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
    <Wrapper>
      {show && <OverlayMask onClick={closeModal} />}
      {show && <Modal action={action} closeModal={closeModal}></Modal>}
      <MainContainer>
        <MainHeader url={isLoggedIn ? userData?.me.avatar : null}>
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
        <MainPage>
          {reviewData &&
            reviewData?.homeReviews &&
            reviewData?.homeReviews.map((r: any) => (
              <ReviewBox key={r.id} {...r}></ReviewBox>
            ))}
        </MainPage>
      </MainContainer>
    </Wrapper>
  );
};

export default HomePresenter;
