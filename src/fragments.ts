import { gql } from "apollo-boost";

export interface productProp {
  id?: string;
  user?: { id: string; avatar: string; nickName: string };
  productName?: string;
  productPhoto?: { id: string; url: string };
  reviews?: Array<{ id: string; rating: number }>;
  category?: Array<{
    id: string;
    categoryName: string;
    superCategory: { id: string; superCategoryName: string };
  }>;
  reviewCount?: number;
  createdAt?: string;
  isPublished?: boolean;
  loading?: boolean;
}

export const PRODUCT_FRAGMENT = gql`
  fragment ProductParts on Product {
    id
    user {
      id
      avatar
      nickName
    }
    productName
    productPhoto {
      id
      url
    }
    reviews {
      id
      rating
    }
    category {
      id
      categoryName
      superCategory {
        id
        superCategoryName
      }
    }
    reviewCount
    createdAt
    isPublished
  }
`;

export interface reviewProp {
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

export const REVIEW_FRAGMENT = gql`
  fragment ReviewParts on Review {
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
    comments {
      id
      user {
        id
        nickName
        avatar
        isSelf
      }
      text
      review {
        id
        user {
          id
        }
      }
    }
    title
    text
    rating
    reviewPhotos {
      id
      url
    }
    isHated
    likeCount
    hateCount
    commentCount
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    avatar
    email
    nickName
    isSelf
    reviewCount
    productCount
    myReview {
      id
      text
      likeCount
      hateCount
      commentCount
      reviewPhotos {
        id
        url
      }
    }
    myProduct {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;
