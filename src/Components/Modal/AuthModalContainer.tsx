import React, { useState } from "react";
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
  const [action, setAction] = useState("logIn");
  const emailInput = useInput("");
  const nickNameInput = useInput("");
  const passInput = useInput("");
  const secretInput = useInput("");
  const comfirmInput = useInput("");
  const [loginMutation] = useMutation(LOG_IN, {
    variables: {
      NameOrEmail: nickNameInput.value,
      password: passInput.value,
      type: "NICKNAME",
    },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (action === "login") {
      if (nickNameInput.value !== "" || passInput.value !== "") {
        const {
          data: { login },
        } = await loginMutation();
        if (login) {
          localLogInMutation({ variables: { token: login } });
          window.location.reload();
        }
      }
    } else if (action === "signUp") {
    } else if (action === "confirm") {
    }
  };

  return (
    <AuthModalPresenter
      show={show}
      closeModal={closeModal}
      className={className}
      action={action}
      setAction={setAction}
      emailInput={emailInput}
      nickNameInput={nickNameInput}
      passInput={passInput}
      secretInput={secretInput}
      comfirmInput={comfirmInput}
      onSubmit={onSubmit}
    ></AuthModalPresenter>
  );
};

export default AuthModalContainer;
