import React from "react";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import ServicePolicy from "./ServicePolicy";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const Policy: React.FunctionComponent = () => {
  const location = useLocation();
  return (
    <Wrapper>
      {location.search === "Privacy" ? (
        <>{PrivacyPolicy}</>
      ) : (
        <>{ServicePolicy}</>
      )}
    </Wrapper>
  );
};

export default Policy;
