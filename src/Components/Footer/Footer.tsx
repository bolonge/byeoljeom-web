import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";

const Container = styled.footer`
  width: 100%;
  border-top: ${(props) => props.theme.boxBorder};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  ${media.phone} {
    flex-direction: column;
    padding: 30px 0px;
  }
`;

const Case = styled.div`
  width: 30%;
  height: 150px;
  margin: 0 10px;
  border: 1px solid black;
  ${media.phone} {
    width: 90%;
    margin: 10px 10px;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <Container>
      <Case></Case>
      <Case></Case>
      <Case></Case>
    </Container>
  );
};

export default Footer;
