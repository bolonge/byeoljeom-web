import React from "react";
import AuthModalPresenter from "./AuthModalPresenter";

interface IProp {
  show?: boolean;
}

const AuthModalContainer: React.FunctionComponent<IProp> = ({ show }) => {
  return <AuthModalPresenter></AuthModalPresenter>;
};

export default AuthModalContainer;
