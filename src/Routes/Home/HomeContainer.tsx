import React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import {
  HOME_REVIEWS,
  HomeReviewsData,
  HOME_USER,
  HomeUserProp,
} from "./HomeQueries";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";

const HomeContainer: React.FunctionComponent = () => {
  const isLoggedIn = useIsLoggedIn();
  const { data: reviewData, loading } = useQuery<HomeReviewsData>(HOME_REVIEWS);
  const { data: userData } = useQuery<HomeUserProp>(HOME_USER, {
    skip: !isLoggedIn,
  });

  return (
    <HomePresenter
      reviewData={reviewData}
      userData={userData}
      loading={loading}
    ></HomePresenter>
  );
};

export default HomeContainer;
