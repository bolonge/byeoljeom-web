import React from "react";
import styled from "../../typed-components";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";

const MainPage = styled.div`
  width: 100%;
  height: 100%;
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
