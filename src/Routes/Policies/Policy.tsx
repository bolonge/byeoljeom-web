import React from "react";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const Policy: React.FunctionComponent = () => {
  const location = useLocation();
  return <Wrapper></Wrapper>;
};

export default Policy;
