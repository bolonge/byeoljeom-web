import React from "react";
import AuthModalPresenter from "./AuthModalPresenter";
import { useMutation } from "@apollo/react-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CHANGE_PASSWORD,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueries";

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
  const [requestSecretMutation] = useMutation(LOG_IN);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET);
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  return (
    <AuthModalPresenter
      show={show}
      closeModal={closeModal}
      className={className}
    ></AuthModalPresenter>
  );
};

export default AuthModalContainer;
