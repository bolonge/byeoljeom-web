import React, { useState } from "react";
import AuthModalPresenter from "./AuthModalPresenter";
import { useMutation } from "@apollo/react-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueries";
import useInput from "../../Hooks/useInput";

interface IProp {
  action?: string;
  closeModal?: any;
  className?: string;
}

const AuthModalContainer: React.FunctionComponent<IProp> = ({
  action: actionProp,
  closeModal,
  className,
}) => {
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(actionProp);
  const [message, setMessage] = useState("");
  const emailInput = useInput("");
  const nickNameInput = useInput("");
  const passInput = useInput("");
  const secretInput = useInput("");
  const confirmInput = useInput("");
  const [loginMutation] = useMutation(LOG_IN, {
    variables: {
      NameOrEmail: nickNameInput.value,
      password: passInput.value,
      type: "NICKNAME",
    },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      nickName: nickNameInput.value,
      email: emailInput.value,
      password: passInput.value,
    },
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: emailInput.value,
      secret: secretInput.value,
    },
  });

  const onSubmit = async (e: any) => {
    e.persist();
    if (action === "logIn") {
      if (nickNameInput.value !== "" && passInput.value !== "") {
        try {
          setLoading(true);
          const {
            data: { login },
          } = await loginMutation();
          if (login === "이메일인증을 해야합니다") {
            setMessage("이메일 인증을 해야합니다");
          } else if (
            login === "유저이름이 없습니다" ||
            login === "비밀번호 오류"
          ) {
            setMessage("이메일 또는 비밀번호 오류입니다");
          } else {
            localLogInMutation({ variables: { token: login } });
            setMessage("로그인 되었습니다");
            setTimeout(() => window.location.reload(), 1000);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("빈칸");
      }
    } else if (action === "signUp") {
      try {
        setLoading(true);
        const {
          data: { createAccount },
        } = await createAccountMutation();
        if (createAccount) {
          setAction("confirm");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else if (action === "confirm") {
      try {
        setLoading(true);
        const {
          data: { confirmSecret },
        } = await confirmSecretMutation();
        if (confirmSecret) {
          setAction("logIn");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AuthModalPresenter
      loading={loading}
      closeModal={closeModal}
      className={className}
      action={action}
      setAction={setAction}
      message={message}
      emailInput={emailInput}
      nickNameInput={nickNameInput}
      passInput={passInput}
      confirmInput={confirmInput}
      onSubmit={onSubmit}
    ></AuthModalPresenter>
  );
};

export default AuthModalContainer;
