import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  ProductDataProps,
  ProductVarsProps,
  SEE_PRODUCT,
} from "./ProductQueries";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";

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
  const { search } = useLocation();
  const name = decodeURIComponent(search.split("=")[1]);
  console.log(search);
  const { data: PData, loading: PLoading } = useQuery<
    ProductDataProps,
    ProductVarsProps
  >(SEE_PRODUCT, { variables: { productName: name } });

  return (
    <MainPage>
      <Header></Header>
      <ReviewContainer></ReviewContainer>
    </MainPage>
  );
};

export default ProductPage;
