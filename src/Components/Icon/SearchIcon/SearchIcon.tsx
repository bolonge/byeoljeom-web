import React from "react";
import styled from "../../../typed-components";

const Container = styled.div``;

interface IProp {
  color?: string;
  className?: string;
}

const SearchIcon: React.FunctionComponent<IProp> = ({
  color = "white",
  className,
}) => {
  return (
    <Container className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 348 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.4903 83.9903C115.709 51.7721 167.945 51.7721 200.163 83.9903C232.381 116.209 232.381 168.445 200.163 200.663C167.945 232.881 115.709 232.881 83.4903 200.663C51.2721 168.445 51.2721 116.209 83.4903 83.9903Z"
          stroke={color}
          stroke-width="35"
        />
        <rect
          x="193.445"
          y="219.401"
          width="35"
          height="100"
          rx="10"
          transform="rotate(-45 193.445 219.401)"
          fill={color}
        />
      </svg>
    </Container>
  );
};

export default SearchIcon;
