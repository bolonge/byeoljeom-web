import gql from "graphql-tag";
import { PRODUCT_FRAGMENT } from "../../fragments";
import { productProp } from "../../fragments";

export interface searchPropData {
  searchProduct: productProp[];
}

export interface searchPropVars {
  term: string | null;
}

export const SEARCH = gql`
  query searchProduct($term: String!) {
    searchProduct(term: $term) {
      ...ProductParts
    }
  }
  ${PRODUCT_FRAGMENT}
`;
