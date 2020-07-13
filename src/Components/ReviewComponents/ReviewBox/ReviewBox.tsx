import React from "react";
import styled from "../../../typed-components";
import { HomeReviewsData } from "../../../Routes/Home/HomeQueries";

const Wrapper = styled.div`
  ${(props) => props.theme.whiteBox}
`;

const Text = styled.span``;

const ReviewBox: React.FunctionComponent<HomeReviewsData> = ({
  homeReviews,
}) => {
  return (
    <Wrapper>
      <Text></Text>
    </Wrapper>
  );
};

export default ReviewBox;
