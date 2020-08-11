import React from "react";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "@apollo/react-hooks";
import { searchPropData, searchPropVars, SEARCH } from "./SearchQueries";
import { useLocation, useParams } from "react-router-dom";

const SearchContainer = () => {
  const { search } = useLocation();
  const term = new URLSearchParams(search).get("term");
  const { data, loading } = useQuery<searchPropData, searchPropVars>(SEARCH, {
    skip: term === null,
    variables: {
      term,
    },
  });
  console.log(data?.searchProduct);
  return <SearchPresenter></SearchPresenter>;
};

export default SearchContainer;
