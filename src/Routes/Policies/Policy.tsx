import React, { useEffect } from "react";
import styled from "../../typed-components";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import ServicePolicy from "./ServicePolicy";
import { media } from "../../Styles/MediaSize";

const Wrapper = styled.div`
  width: 70%;
  min-width: 550px;
  min-height: 80vh;
  padding: 10px;
  ${media.phone} {
    padding: 5px;
    width: 100%;
    min-width: 100%;
  }
`;

const Policy: React.FunctionComponent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
