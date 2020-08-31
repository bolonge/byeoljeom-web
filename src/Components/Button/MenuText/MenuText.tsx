import React from "react";
import styled from "../../../typed-components";

const Container = styled.div<{ profile: string }>`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-bottom: 0.3px
    ${(props) => (props.profile === "true" ? "none" : "solid")}
    rgba(101, 166, 74, 0.3);
`;

const Text = styled.span<{ size: string; color: string; weight: number }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

interface IProp {
  onClick?: any;
  text: string | undefined;
  size?: string;
  color?: string;
  weight?: number;
  profile?: boolean | string;
}

const MenuText: React.FunctionComponent<IProp> = ({
  onClick,
  text,
  size = "15px",
  color = "black",
  weight = 500,
  profile = "false",
}) => {
  return (
    <Container onClick={onClick} profile={profile.toString()}>
      <Text color={color} weight={weight} size={size}>
        {text}
      </Text>
    </Container>
  );
};

export default MenuText;
