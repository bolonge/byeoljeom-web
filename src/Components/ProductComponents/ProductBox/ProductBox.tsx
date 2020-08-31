import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";
import { media } from "../../../Styles/MediaSize";

const Wrapper = styled.div`
  padding: 5px;
  width: auto;
  height: 300px;
  ${(props) => props.theme.whiteBox};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  ${media.tablet} {
    width: auto;
  }
  ${media.phone} {
    width: auto;
  }
`;

const PhotoContainer = styled.div<{ url: string }>`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
  display: flex;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  color: black;
`;

const Count = styled.span``;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled.span``;

const ProductBox: React.FunctionComponent<productProp> = ({
  productName,
  productPhoto,
  reviewCount,
  category,
}) => {
  return (
    <Wrapper>
      <PhotoContainer url={productPhoto?.url}>
        {productPhoto?.url ? null : "이미지가 없습니다"}
      </PhotoContainer>
      <TextContainer>
        <Name>{productName}</Name>
        <Count>{reviewCount}</Count>
        <CategoryContainer>
          {category.map((c) => (
            <CategoryName key={c.id}>{c.categoryName}</CategoryName>
          ))}
        </CategoryContainer>
      </TextContainer>
    </Wrapper>
  );
};

export default ProductBox;
