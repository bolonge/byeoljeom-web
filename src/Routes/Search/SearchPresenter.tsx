import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";

const Wrapper = styled.div`
  width: 60%;
  min-width: 768px;
  min-height: 100vh;
  background-color: white;
  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    width: 100%;
  }
`;

interface IProp {
  reviewData: any;
  reviewLoading: boolean;
}

const SearchPresenter: React.FunctionComponent<IProp> = ({
  reviewData,
  reviewLoading,
}) => {
  return <Wrapper></Wrapper>;
};

export default SearchPresenter;
