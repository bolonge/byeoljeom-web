import React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { HOME_REVIEWS, HomeReviewsData } from "./HomeQueries";

const HomeContainer: React.FunctionComponent = () => {
  const { data: reviewData, loading } = useQuery<HomeReviewsData>(HOME_REVIEWS);

  return (
    <HomePresenter reviewData={reviewData} loading={loading}></HomePresenter>
  );
};

export default HomeContainer;
