import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";

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
    <MainPage>
      {reviewData &&
        reviewData?.homeReviews &&
        reviewData?.homeReviews.map((r: any) => (
          <ReviewBox key={r.id} {...r}></ReviewBox>
        ))}
    </MainPage>
  );
};

export default HomePresenter;
