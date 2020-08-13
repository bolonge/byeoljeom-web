import React from "react";
import styled from "../../typed-components";

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;

const SearchPresenter: React.FunctionComponent = () => {
  return <Wrapper>{"검색"}</Wrapper>;
};

export default SearchPresenter;
