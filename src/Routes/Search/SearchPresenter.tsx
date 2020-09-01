import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import ProductBox from "../../Components/ProductComponents/ProductBox";

const Wrapper = styled.div`
  width: 100%;
  min-width: 768px;
  min-height: 100vh;
  background-color: transparent;
  ${media.tablet} {
    min-width: 100%;
  }
  ${media.phone} {
    min-width: 100%;
  }
`;

const ProductsConatiner = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${media.custom(870)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${media.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${media.phone} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ReviewsContainer = styled.div``;

interface IProp {
  productData: any;
  productLoading: boolean;
}

const SearchPresenter: React.FunctionComponent<IProp> = ({
  productData,
  productLoading,
}) => {
  return (
    <Wrapper>
      <ProductsConatiner>
        {productData &&
          productData.map((r: any) => (
            <ProductBox {...r} key={r.id}></ProductBox>
          ))}
      </ProductsConatiner>
      <ReviewsContainer></ReviewsContainer>
    </Wrapper>
  );
};

export default SearchPresenter;
