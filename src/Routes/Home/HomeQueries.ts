import { PRODUCT_FRAGMENT, REVIEW_FRAGMENT } from "../../fragments";
import gql from "graphql-tag";

export const HOME_PRODUCTS = gql`
  query homeProducts {
    homeProducts {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const HOME_USER_PRODUCTS = gql`
  query homeUserProducts {
    homeUserProducts {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const HOME_REVIEWS = gql`
  query homeReviews {
    homeReviews {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;

export const HOME_USER_REVIEWS = gql`
  query homeUserReviews {
    homeUserReviews {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;
