import React from "react";
import styled from "../../../typed-components";

const Container = styled.div`
  cursor: pointer;
`;

interface IProp {
  color?: string;
  className?: string;
  onClick: any;
}

const MoreIcon: React.FunctionComponent<IProp> = ({
  color = "white",
  className,
  onClick,
}) => {
  return (
    <Container onClick={onClick} className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 200 184"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="35" rx="17.5" />
        <rect y="74" width="200" height="35" rx="17.5" />
        <rect y="149" width="200" height="35" rx="17.5" />
      </svg>
    </Container>
  );
};

export default MoreIcon;
