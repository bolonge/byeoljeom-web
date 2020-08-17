import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import ProductBox from "../../Components/ProductComponents/ProductBox";

const Wrapper = styled.div`
  width: 60%;
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
      {productData &&
        productData.map((r: any) => (
          <ProductBox {...r} key={r.id}></ProductBox>
        ))}
    </Wrapper>
  );
};

export default SearchPresenter;
