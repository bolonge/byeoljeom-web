import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  ProductDataProps,
  ProductVarsProps,
  ReviewDataProps,
  ReviewVarsProps,
  SEE_PRODUCT,
  REVIEW_LIST,
} from "./ProductQueries";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";
import ReviewBox from "../../Components/ReviewComponents/ReviewBox";
import { media } from "../../Styles/MediaSize";
import GradientLoad from "../../Components/GradientLoad";

const MainPage = styled.div`
  width: 1000px;
  height: auto;
  padding: 10px;
  ${media.tablet} {
    width: 768px;
  }
  ${media.phone} {
    width: 576px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid black;
`;

const TextContainer = styled.div``;

const Title = styled.span``;

const ReviewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid black;
`;

interface IProp {}

const ProductPage: React.FunctionComponent<IProp> = ({}) => {
  const { search } = useLocation();
  const name = decodeURIComponent(search.split("=")[1]);
  const { data: PData, loading: PLoading } = useQuery<
    ProductDataProps,
    ProductVarsProps
  >(SEE_PRODUCT, { variables: { productName: name } });
  const { data: RData, loading: RLoading } = useQuery<
    ReviewDataProps,
    ReviewVarsProps
  >(REVIEW_LIST, { variables: { productName: name } });

  return (
    <MainPage>
      <Header>
        <TextContainer>
          {PLoading ? (
            <GradientLoad />
          ) : (
            <Title>{PData?.seeProduct.productName}</Title>
          )}
        </TextContainer>
      </Header>
      <ReviewContainer>
        {RData?.reviewList &&
          RData?.reviewList.map((r: any) => (
            <ReviewBox key={r.id} {...r}></ReviewBox>
          ))}
      </ReviewContainer>
    </MainPage>
  );
};

export default ProductPage;
