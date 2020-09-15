import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ProductPresenter from "./ProductPresenter";
import { PRODUCT_FRAGMENT, REVIEW_FRAGMENT } from "../../fragments";
import gql from "graphql-tag";

const SEE_PRODUCT = gql`
  query seeProduct {
    seeProduct {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const SEE_REVIEW = gql`
  query seeReview {
    seeReview {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;

const ProductContainer: React.FunctionComponent = () => {
  const { data: productData, loading: productLoading } = useQuery(SEE_PRODUCT);
  const { data: reviewData, loading: reviewLoading } = useQuery(SEE_REVIEW);
  return <ProductPresenter></ProductPresenter>;
};

export default ProductContainer;
