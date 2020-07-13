import React from "react";
import ReactDOM from "react-dom";
import styled from "../../typed-components";

const Container = styled.div`
  ${(props) => props.theme.whiteBox}
`;

interface IProp {
  show?: boolean;
}

const AuthModalPresenter: React.FunctionComponent<IProp> = ({ show }) => {
  return <Container></Container>;
};

export default AuthModalPresenter;
