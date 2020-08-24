import React from "react";
import styled from "../../../typed-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-bottom: 0.3px solid ${(props) => props.theme.darkGreyColor};
`;

const Text = styled.span<{ color: string; weight: number }>`
  font-size: 15px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

interface IProp {
  onClick?: any;
  text: string;
  color?: string;
  weight?: number;
}

const MenuText: React.FunctionComponent<IProp> = ({
  onClick,
  text,
  color = "black",
  weight = 400,
}) => {
  return (
    <Container onClick={onClick}>
      <Text color={color} weight={weight}>
        {text}
      </Text>
    </Container>
  );
};

export default MenuText;
