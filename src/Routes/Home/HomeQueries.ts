import { PRODUCT_FRAGMENT, REVIEW_FRAGMENT } from "../../fragments";
import gql from "graphql-tag";
import { object } from "prop-types";

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

export interface HomeReviews {
  id: string;
  user: {
    id: string;
    nickName: string;
    avatar: string;
    isSelf: boolean;
  };
  product: {
    productName: string;
  };
  title: string;
  text: string;
  rating: string;
  reviewPhotos: {
    id: string;
    url: string;
  };
  isLiked: boolean;
  isHated: boolean;
  likeCount: number;
  hateCount: number;
  commentCount: number;
}

export interface HomeReviewsData {
  homeReviews: HomeReviews[];
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
