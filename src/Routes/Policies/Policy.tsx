import React from "react";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import ServicePolicy from "./ServicePolicy";
import { media } from "../../Styles/MediaSize";

const Wrapper = styled.div`
  width: 70%;
  min-width: 505px;
  min-height: 80vh;
  padding: 10px;
  ${media.phone} {
    width: 90%;
    min-width: 90%;
  }
`;

const Policy: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname.split("/")[2] === "privacy" ? (
        <PrivacyPolicy></PrivacyPolicy>
      ) : (
        <ServicePolicy></ServicePolicy>
      )}
    </Wrapper>
  );
};

export default Policy;
