import React from "react";
import styled from "../../typed-components";

const MainPage = styled.div`
  width: 100%;
  height: 100%;
`;

interface IProp {}

const ProductPresenter: React.FunctionComponent<IProp> = () => {
  return <MainPage></MainPage>;
};

export default ProductPresenter;
