import {
  productProp,
  PRODUCT_FRAGMENT,
  reviewProp,
  REVIEW_FRAGMENT,
} from "../../fragments";
import gql from "graphql-tag";

export interface HomeProductData {
  homeProducts: productProp[];
}

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

export interface HomeReviewsData {
  homeReviews: reviewProp[];
}

export const HOME_REVIEWS = gql`
  query homeReviews {
    homeReviews {
      id
      user {
        id
        nickName
        avatar
        isSelf
      }
      product {
        productName
      }
      title
      text
      rating
      reviewPhotos {
        id
        url
      }
      isLiked
      isHated
      likeCount
      hateCount
      commentCount
    }
  }
`;

export const HOME_USER_REVIEWS = gql`
  query homeUserReviews {
    homeUserReviews {
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;
