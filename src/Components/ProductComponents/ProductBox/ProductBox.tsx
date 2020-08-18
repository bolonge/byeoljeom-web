import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";

const Container = styled.div<{ url: string }>`
  width: 200px;
  height: 150px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.span`
  color: black;
`;

const Count = styled.span``;

const CategoryName = styled.span``;

const ProductBox: React.FunctionComponent<productProp> = ({
  productName,
  productPhoto,
  reviewCount,
  category,
}) => {
  return (
    <Container url={productPhoto?.url}>
      {productPhoto?.url ? null : "이미지가 없습니다"}
      <TextContainer>
        <Name>{productName}</Name>
        <Count>{reviewCount}</Count>
        {category.map((c) => (
          <CategoryName key={c.id}>{c.categoryName}</CategoryName>
        ))}
      </TextContainer>
    </Container>
  );
};

export default ProductBox;
