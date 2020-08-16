import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";

const Container = styled.div<{ url: string }>`
  width: 200px;
  height: 150px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 20px;
`;

const ProductBox: React.FunctionComponent<productProp> = ({}) => {
  return <Container url={""}></Container>;
};

export default ProductBox;
