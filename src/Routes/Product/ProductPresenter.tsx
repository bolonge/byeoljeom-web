import React from "react";
import styled from "../../typed-components";

const MainPage = styled.div`
  width: 100%;
  height: 100%;
`;

interface IProp {
  productData: any;
  productLoading: boolean;
  reviewData: any;
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
