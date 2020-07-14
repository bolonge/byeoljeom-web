import React from "react";
import AuthModalPresenter from "./AuthModalPresenter";

interface IProp {
  show?: boolean;
  closeModal?: any;
  className?: string;
}

const AuthModalContainer: React.FunctionComponent<IProp> = ({
  show,
  closeModal,
  className,
}) => {
  return (
    <AuthModalPresenter
      show={show}
      closeModal={closeModal}
      className={className}
    ></AuthModalPresenter>
  );
};

export default AuthModalContainer;
