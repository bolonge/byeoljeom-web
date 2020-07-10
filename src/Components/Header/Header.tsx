import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.mainColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const Header: React.FunctionComponent = () => {
  const history = useHistory();
  return <Container></Container>;
};

export default Header;
