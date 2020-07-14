import React, { useState } from "react";
import styled from "../../typed-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { media } from "../../Styles/MediaSize";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";
import Modal from "../../Components/Modal";
import AuthButton from "../../Components/Button/AuthButton";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";

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
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
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

interface IProp {
  reviewData?: any;
}

const HomePresenter: React.FunctionComponent<IProp> = ({ reviewData }) => {
  const isLoggedIn = useIsLoggedIn();
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  return (
    <Wrapper>
      {show && (
        <OverlayMask>
          <Modal show={show} closeModal={closeModal}></Modal>
        </OverlayMask>
      )}
      <MainContainer>
        <MainHeader>
          {isLoggedIn ? null : (
            <ButtonContainer>
              <AuthButton
                text="로그인"
                textColor={"#6AB04C"}
                backColor={"#fff"}
                borderColor={"#6AB04C"}
                onClick={openModal}
              ></AuthButton>
              <AuthButton
                text="회원가입"
                textColor={"#fff"}
                backColor={"#6AB04C"}
                borderColor={"#6AB04C"}
                onClick={openModal}
              ></AuthButton>
            </ButtonContainer>
          )}
        </MainHeader>
        <MainPage>
          {reviewData &&
            reviewData.homeReviews &&
            reviewData.homeReviews.map((r: any) => (
              <ReviewBox key={r.id} {...r}></ReviewBox>
            ))}
        </MainPage>
      </MainContainer>
    </Wrapper>
  );
};

export default HomePresenter;
