import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";

const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: ${(props) => props.theme.boxBorder};
  background-color: ${(props) => props.theme.lightGreyColor};
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  ${media.phone} {
    padding: 30px 0px;
  }
`;

const Footer: React.FunctionComponent = () => {
  return <Container></Container>;
};

export default Footer;
