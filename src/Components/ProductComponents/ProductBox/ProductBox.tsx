import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";

const Container = styled.div<{ url: string }>`
  width: 200px;
  height: 150px;
  background-color: red;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 20px;
`;

const Text = styled.span``;

const ProductBox: React.FunctionComponent<productProp> = ({
  user,
  productPhotos,
}) => {
  return (
    <Container url={productPhotos ? productPhotos[0]?.url : ""}>
      {productPhotos ? null : <Text>이미지가 없습니다</Text>}
    </Container>
  );
};

export default ProductBox;
