import React from "react";
import styled from "../../../typed-components";

const Container = styled.div<{ size: number; color: string }>`
  width: auto;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

const Text = styled.span``;

interface IProp {
  text: string;
  onClick: any;
  size: number;
  color: string;
}

const TextButton: React.FunctionComponent<IProp> = ({
  text,
  onClick,
  size,
  color,
}) => {
  return (
    <Container onClick={onClick} size={size} color={color}>
      <Text>{text}</Text>
    </Container>
  );
};

export default TextButton;
