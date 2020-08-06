import React from "react";
import styled from "../../../typed-components";

const Container = styled.div`
  cursor: pointer;
`;

interface IProp {
  color?: string;
  size?: number;
  className?: string;
  onClick: any;
}

const CloseIcon: React.FunctionComponent<IProp> = ({
  color = "white",
  size = 20,
  className,
  onClick,
}) => {
  return (
    <Container onClick={onClick} className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 241 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.86292"
          y="212.459"
          width="300"
          height="35"
          transform="rotate(-45 3.86292 212.459)"
          fill={color}
        />
        <rect
          x="24.7487"
          width="300"
          height="35"
          transform="rotate(45 24.7487 0)"
          fill={color}
        />
      </svg>
    </Container>
  );
};

export default CloseIcon;
