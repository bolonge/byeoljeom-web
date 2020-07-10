import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  border-top: ${(props) => props.theme.boxBorder};
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
