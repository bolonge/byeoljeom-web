import React from "react";
import styled from "../../../typed-components";

const Container = styled.div<{ tC: string; backC: string; borderC: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
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
  textColor: string;
  backColor: string;
  borderColor: string;
  onClick: any;
}

const AuthButton: React.FunctionComponent<IProp> = ({
  text,
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
    >
      {text}
    </Container>
  );
};

export default AuthButton;
