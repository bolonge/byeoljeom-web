import React from "react";
import styled from "../../typed-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { media } from "../../Styles/MediaSize";

const Wrapper = styled.div``;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 55px;
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

const HomePresenter: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <MainPage></MainPage>
      </MainContainer>
    </Wrapper>
  );
};

export default HomePresenter;
