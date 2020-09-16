import React from "react";
import { productProp, reviewProp } from "../../fragments";
import styled from "../../typed-components";

const MainPage = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div``;

interface IProp {
  productData?: productProp;
  productLoading: boolean;
  reviewData?: reviewProp[];
  reviewLoading: boolean;
}

const ProductPresenter: React.FunctionComponent<IProp> = ({
  productData,
  productLoading,
  reviewData,
  reviewLoading,
}) => {
  return <MainPage></MainPage>;
};

export default ProductPresenter;
