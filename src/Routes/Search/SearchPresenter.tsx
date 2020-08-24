import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import ProductBox from "../../Components/ProductComponents/ProductBox";

const Wrapper = styled.div`
  width: 100%;
  min-width: 768px;
  min-height: 100vh;
  background-color: white;
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
  grid-template-columns: auto auto auto auto;
  ${media.tablet} {
    grid-template-columns: auto auto auto;
  }
  ${media.phone} {
    grid-template-columns: auto auto;
  }
`;

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
    </Wrapper>
  );
};

export default SearchPresenter;
