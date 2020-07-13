import React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { HOME_REVIEWS, HomeReviewsData } from "./HomeQueries";

const HomeContainer: React.FunctionComponent = () => {
  const { data, loading } = useQuery<HomeReviewsData>(HOME_REVIEWS);
  console.log(data);

  return <HomePresenter reviewData={data}></HomePresenter>;
};

export default HomeContainer;
