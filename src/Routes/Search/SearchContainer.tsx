import React from "react";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "@apollo/react-hooks";
import { searchPropData, searchPropVars, SEARCH } from "./SearchQueries";
import { useLocation } from "react-router-dom";

const SearchContainer: React.FunctionComponent = () => {
  const { search } = useLocation();
  const term = new URLSearchParams(search).get("term");
  const { data: reviewData, loading: reviewLoading } = useQuery<
    searchPropData,
    searchPropVars
  >(SEARCH, {
    skip: term === null || term === "",
    variables: {
      term,
    },
  });
  return (
    <SearchPresenter
      reviewData={reviewData}
      reviewLoading={reviewLoading}
    ></SearchPresenter>
  );
};

export default SearchContainer;
