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

const Container = styled.div<{
  tC: string;
  backC: string;
  borderC: string;
  size: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => getSize(props.size)}
  min-width: 60px;
  height: 40px;
  border-radius: 5px;
  font-weight: 700;
  color: ${(props) => props.tC};
  background-color: ${(props) => props.backC};
  border: 0.5px solid ${(props) => props.borderC};
  cursor: pointer;
`;

interface IProp {
  text: string;
  size?: string;
  textColor: string;
  backColor: string;
  borderColor: string;
  onClick?: any;
}

const AuthButton: React.FunctionComponent<IProp> = ({
  text,
  size = "sm",
  textColor,
  backColor,
  borderColor,
  onClick,
}) => {
  return (
    <Container
      tC={textColor}
      backC={backColor}
      borderC={borderColor}
      onClick={onClick}
      size={size}
    >
      {text}
    </Container>
  );
};

export default AuthButton;
