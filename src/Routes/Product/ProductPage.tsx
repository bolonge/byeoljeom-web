import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  ProductDataProps,
  ProductVarsProps,
  ReviewDataProps,
  ReviewVarsProps,
  SEE_PRODUCT,
  SEE_REVIEW,
} from "./ProductQueries";
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

interface IProp {}

const ProductPage: React.FunctionComponent<IProp> = ({}) => {
  const { data: PData, loading: PLoading } = useQuery<
    ProductDataProps,
    ProductVarsProps
  >(SEE_PRODUCT);
  const { data: RData, loading: RLoading } = useQuery<
    ReviewDataProps,
    ReviewVarsProps
  >(SEE_REVIEW);
  return (
    <MainPage>
      <Header></Header>
      <ReviewContainer></ReviewContainer>
    </MainPage>
  );
};

export default ProductPage;
