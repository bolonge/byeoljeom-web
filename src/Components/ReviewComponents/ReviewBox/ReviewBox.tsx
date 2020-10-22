import React from "react";
import styled from "../../../typed-components";
import { reviewProp } from "../../../fragments";

const Wrapper = styled.div`
width:700px;
  ${(props) => props.theme.whiteBox}
`;

const Text = styled.span``;

const ReviewBox: React.FunctionComponent<reviewProp> = ({
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
  loading,
}) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ReviewBox;
