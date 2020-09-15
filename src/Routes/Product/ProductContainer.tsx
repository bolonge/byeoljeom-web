import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ProductPresenter from "./ProductPresenter";
import {
  ProductDataProps,
  ProductVarsProps,
  ReviewDataProps,
  ReviewVarsProps,
  SEE_PRODUCT,
  SEE_REVIEW,
} from "./ProductQueries";

const ProductContainer: React.FunctionComponent = () => {
  const { data: productData, loading: productLoading } = useQuery<
    ProductDataProps,
    ProductVarsProps
  >(SEE_PRODUCT);
  const { data: reviewData, loading: reviewLoading } = useQuery<
    ReviewDataProps,
    ReviewVarsProps
  >(SEE_REVIEW);
  return (
    <ProductPresenter
      productData={productData}
      productLoading={productLoading}
      reviewData={reviewData}
      reviewLoading={reviewLoading}
    ></ProductPresenter>
  );
};

export default ProductContainer;
