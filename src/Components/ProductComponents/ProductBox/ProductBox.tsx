import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";

const Wrapper = styled.div`
  padding: 5px;
  width: auto;
  height: 300px;
  ${(props) => props.theme.whiteBox};
`;

const PhotoContainer = styled.div<{ url: string }>`
  width: 150px;
  height: 150px;
  display: flex;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
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
