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

const Wrapper = styled.div`
  width: auto;
  min-width: 768px;
  height: auto;
  ${media.tablet} {
    min-width: 100%;
  }
  ${media.phone} {
    min-width: 100%;
  }
`;

const Header = styled.div`
  width: 800px;
  min-width: 768px;
  height: 250px;
  padding: 10px;
  border: 1px solid black;
  ${media.tablet} {
    min-width: 576px;
  }
  ${media.phone} {
  }
`;

const TextContainer = styled.div``;

const Title = styled.span``;

const ReviewContainer = styled.div`
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default ProductPage;
