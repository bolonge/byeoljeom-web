import React from "react";
import { productProp, reviewProp } from "../../fragments";
import styled from "../../typed-components";

const MainPage = styled.div`
  width: 1000px;
  height: auto;
  padding: 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid black;
`;

const ReviewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid black;
`;

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
  return (
    <MainPage>
      <Header></Header>
      <ReviewContainer></ReviewContainer>
    </MainPage>
  );
};

export default ProductPresenter;
