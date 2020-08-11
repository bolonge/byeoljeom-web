import React, { useState } from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";
import TextButton from "../../Components/Button/TextButton";

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
  reviewData: any;
  loading: boolean;
}

const HomePresenter: React.FunctionComponent<IProp> = ({
  reviewData,
  loading,
}) => {
  return (
    <Wrapper>
      <MainContainer>
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
