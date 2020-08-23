import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";

const Wrapper = styled.div`
  padding: 5px;
  width: 300px;
  height: 200px;
`;

const PhotoContainer = styled.div<{ url: string }>`
  width: 200px;
  height: 150px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
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
