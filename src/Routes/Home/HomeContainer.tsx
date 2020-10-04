import React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import {
  HOME_REVIEWS,
  HomeReviewsData,
  HomeProductData,
  HOME_PRODUCTS,
} from "./HomeQueries";

const HomeContainer: React.FunctionComponent = () => {
  const { data: reviewData, loading } = useQuery<HomeReviewsData>(HOME_REVIEWS);
  const { data: productData, loading: productLoading } = useQuery<
    HomeProductData
  >(HOME_PRODUCTS);
  console.log(productData);

  return (
    <HomePresenter reviewData={reviewData} loading={loading}></HomePresenter>
  );
};

export default HomeContainer;
