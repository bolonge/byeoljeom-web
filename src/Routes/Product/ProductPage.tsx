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
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 1000px;
  box-sizing: border-box;
  padding: 0 20px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  ${media.custom(1000)} {
    width: 768px;
  }
  ${media.tablet} {
    width: 576px;
  }
  ${media.phone} {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: auto;
  min-width: 300px;
  height: 30px;
  display: flex;
  min-width: 200px;
  ${media.phone} {
    width: 300px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  ${media.tablet} {
    font-size: 4vw;
  }
`;

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
            <>
              <Title>{PData?.seeProduct.productName}</Title>
            </>
          )}
        </TextContainer>
      </Header>
      <ReviewContainer>
        {RLoading ? (
          <>
            <ReviewBox loading={RLoading}></ReviewBox>
          </>
        ) : (
          RData?.reviewList &&
          RData?.reviewList.map((r: any) => (
            <ReviewBox key={r.id} {...r}></ReviewBox>
          ))
        )}
      </ReviewContainer>
    </Wrapper>
  );
};

export default ProductPage;
