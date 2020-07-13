import React from "react";
import styled from "../../../typed-components";
import { HomeReviewsData, HomeReviews } from "../../../Routes/Home/HomeQueries";

const Wrapper = styled.div`
  ${(props) => props.theme.whiteBox}
`;

const Text = styled.span``;

const ReviewBox: React.FunctionComponent<HomeReviews> = ({
  id,
  user,
  product,
  title,
  text,
  rating,
  reviewPhotos,
  isLiked,
  isHated,
  likeCount,
  hateCount,
  commentCount,
}) => {
  return (
    <Wrapper>
      <Text>{}</Text>
    </Wrapper>
  );
};

export default ReviewBox;
