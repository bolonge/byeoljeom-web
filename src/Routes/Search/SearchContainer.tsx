import React from "react";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "@apollo/react-hooks";
import { searchPropData, searchPropVars, SEARCH } from "./SearchQueries";
import { useLocation } from "react-router-dom";

const SearchContainer: React.FunctionComponent = () => {
  const { search } = useLocation();
  const term = decodeURIComponent(search.split("=")[1]);
  console.log(search.split("=")[1]);

  // const term = new URLSearchParams(search).get("term");
  const { data: productData, loading: productLoading } = useQuery<
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
      productData={productData?.searchProduct}
      productLoading={productLoading}
    ></SearchPresenter>
  );
};

export default SearchContainer;
