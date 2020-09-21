import {
  productProp,
  PRODUCT_FRAGMENT,
  reviewProp,
  REVIEW_FRAGMENT,
} from "../../fragments";
import gql from "graphql-tag";

export interface ProductDataProps {
  seeProduct: productProp;
}

export interface ProductVarsProps {
  productName: string;
}

export const SEE_PRODUCT = gql`
  query seeProduct($productName: String!) {
    seeProduct(productName: $productName) {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export interface ReviewDataProps {
  reviewList: reviewProp[];
}

export interface ReviewVarsProps {
  productName: string;
}

export const REVIEW_LIST = gql`
  query reviewList($productName: String!) {
    reviewList(productName: $productName) {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;
