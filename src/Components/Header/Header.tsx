import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";

const Container = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.mainColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  ${media.phone} {
    padding: 30px 0px;
  }
`;

const Header: React.FunctionComponent = () => {
  const history = useHistory();
  const search = useInput("");
  return <Container></Container>;
};

export default Header;
