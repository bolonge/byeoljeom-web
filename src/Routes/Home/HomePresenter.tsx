import React from "react";
import styled from "../../typed-components";
import { Helmet } from 'react-helmet'
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";

const MainPage = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color:white;
`;

interface IProp {
  reviewData: any;
  reviewLoading: boolean;
  productData: any;
  productLoading: boolean;
}

const HomePresenter: React.FunctionComponent<IProp> = ({
  reviewData,
  reviewLoading,
  productData,
  productLoading
}) => {

  return (
    <MainPage>
      <Helmet>
        <title>홈 - 별점</title>
      </Helmet>
      {reviewData &&
        reviewData?.homeReviews &&
        reviewData?.homeReviews.map((r: any) => (
          <ReviewBox key={r.id} loading={reviewLoading} {...r}></ReviewBox>
        ))}
    </MainPage>
  );
};

export default HomePresenter;
