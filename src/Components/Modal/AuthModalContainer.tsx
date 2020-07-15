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
import useInput from "../../Hooks/useInput";

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
  const eamilInput = useInput("");
  const userInput = useInput("");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: eamilInput.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: eamilInput.value,
    },
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {},
  });
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
