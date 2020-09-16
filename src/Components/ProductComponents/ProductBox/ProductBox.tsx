import React from "react";
import styled from "../../../typed-components";
import { productProp } from "../../../fragments";
import { media } from "../../../Styles/MediaSize";
import GradientLoad from "../../GradientLoad";

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

const PhotoContainer = styled.image<{ url: string | undefined }>`
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
  align-items: flex-start;
  justify-content: space-around;
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
const CountWrapper = styled.span`
  width: 60%;
  height: 18px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Count = styled.span`
  font-size: 15px;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 80%;
  height: 18px;
  flex-direction: row;
`;

const CategoryName = styled.span`
  font-size: 15px;
`;

const ProductBox: React.FunctionComponent<productProp> = ({
  productPhoto,
  productName,
  reviewCount,
  category,
  loading,
}) => {
  return (
    <Wrapper>
      <PhotoContainer url={productPhoto?.url}>
        {productPhoto?.url ? null : loading ? null : "이미지가 없습니다"}
      </PhotoContainer>
      <TextContainer>
        <NameWrapper>
          {loading ? <GradientLoad /> : <Name>{productName}</Name>}
        </NameWrapper>
        <CountWrapper>
          {loading ? <GradientLoad /> : <Count>{reviewCount}</Count>}
        </CountWrapper>
        <CategoryContainer>
          {loading ? (
            <GradientLoad />
          ) : (
            category?.map((c) => (
              <CategoryName key={c.id}>{c.categoryName}</CategoryName>
            ))
          )}
        </CategoryContainer>
      </TextContainer>
    </Wrapper>
  );
};

export default ProductBox;
