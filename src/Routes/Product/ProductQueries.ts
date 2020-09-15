import {
  productProp,
  PRODUCT_FRAGMENT,
  reviewProp,
  REVIEW_FRAGMENT,
} from "../../fragments";
import gql from "graphql-tag";

export interface ProductDataProps {
  productData: productProp;
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
  reviewData: reviewProp[];
}

export interface ReviewVarsProps {
  id: string;
}

export const SEE_REVIEW = gql`
  query seeReview($id: String!) {
    seeReview(id: $id) {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;
