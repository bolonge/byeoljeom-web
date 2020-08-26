import React from "react";
import styled from "../../../typed-components";

const getSize = (size: string) => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "mg") {
    number = 80;
  } else if (size === "lg") {
    number = 100;
  }
  return `
          width:${number}%;
          `;
};

const Container = styled.button<{
  tC: string;
  backC: string;
  borderC: string;
  size: string;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => getSize(props.size)}
  min-width: 60px;
  height: 40px;
  border-radius: 5px;
  font-weight: 700;
  ${(props) =>
    props.disabled
      ? ` color: ${props.theme.blackColor};
 background-color: ${props.theme.lightGreyColor};
 border: 0.5px solid ${props.theme.darkGreyColor};
 `
      : ` color: ${props.tC};
 background-color: ${props.backC};
 border: 0.5px solid ${props.borderC};
 cursor: pointer;
 &:hover,
 &:active {
   background-color: ${props.tC};
   border: 0.5px solid ${props.backC};
   color: ${props.backC};
 }`}
`;

interface IProp {
  text: string;
  size?: string;
  textColor: string;
  backColor: string;
  borderColor: string;
  onClick?: any;
  disable?: boolean;
}

const AuthButton: React.FunctionComponent<IProp> = ({
  text,
  size = "sm",
  textColor,
  backColor,
  borderColor,
  onClick,
  disable = false,
  children,
}) => {
  return (
    <Container
      tC={textColor}
      backC={backColor}
      borderC={borderColor}
      onClick={onClick}
      size={size}
      disabled={disable}
    >
      {children ? children : text}
    </Container>
  );
};

export default AuthButton;
