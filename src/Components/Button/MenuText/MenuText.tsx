import React from "react";
import styled from "../../../typed-components";

const Container = styled.div`
  width: 100%;
  border-bottom: 0.4px thin ${(props) => props.theme.mainColor};
`;

const Text = styled.span`
  color: black;
  font-size: 12px;
`;

interface IProp {
  onClick?: any;
  text: string | undefined;
}

const MenuText: React.FunctionComponent<IProp> = ({ onClick, text }) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

export default MenuText;
