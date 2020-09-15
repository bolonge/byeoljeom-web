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
  const { data: PData, loading: PLoading } = useQuery<
    ProductDataProps,
    ProductVarsProps
  >(SEE_PRODUCT);
  const { data: RData, loading: RLoading } = useQuery<
    ReviewDataProps,
    ReviewVarsProps
  >(SEE_REVIEW);
  return (
    <ProductPresenter
      productData={PData?.productData}
      productLoading={PLoading}
      reviewData={RData?.reviewData}
      reviewLoading={RLoading}
    ></ProductPresenter>
  );
};

export default ProductContainer;
