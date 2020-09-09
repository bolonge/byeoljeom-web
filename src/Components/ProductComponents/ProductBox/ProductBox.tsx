import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";
import { media } from "../../../Styles/MediaSize";

const Wrapper = styled.div`
  padding: 5px;
  width: auto;
  min-width: 230px;
  height: 300px;
  border-radius: 5px;
  cursor: pointer;
  image {
    background-size: 100% 110%;
    background-position: center;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    image {
      background-size: 120% 120%;
    }
  }

  ${media.tablet} {
    width: auto;
  }
  ${media.phone} {
    width: auto;
  }
`;

const PhotoContainer = styled.image<{ url: string }>`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
`;

const NameWrapper = styled.span`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Name = styled.span`
  color: black;
  font-size: 18px;
`;

const Count = styled.span`
  font-size: 15px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled.span`
  font-size: 15px;
`;

interface PBoxProp {
  productProp: productProp;
  loading?: boolean;
}

const ProductBox: React.FunctionComponent<PBoxProp> = ({
  productProp,
  loading,
}) => {
  return (
    <Wrapper>
      <PhotoContainer url={productProp.productPhoto?.url}>
        {productProp.productPhoto?.url ? null : "이미지가 없습니다"}
      </PhotoContainer>
      <TextContainer>
        <NameWrapper>
          <Name>{productProp.productName}</Name>
        </NameWrapper>
        <Count>{productProp.reviewCount}</Count>
        <CategoryContainer>
          {productProp.category.map((c) => (
            <CategoryName key={c.id}>{c.categoryName}</CategoryName>
          ))}
        </CategoryContainer>
      </TextContainer>
    </Wrapper>
  );
};

export default ProductBox;
