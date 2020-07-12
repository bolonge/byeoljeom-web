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
        width="20"
        height="20"
        viewBox="0 0 253 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0507 114.355C18.0507 61.1608 61.173 18.0384 114.367 18.0384C167.561 18.0384 210.683 61.1607 210.683 114.355C210.683 167.549 167.561 210.671 114.367 210.671C61.173 210.671 18.0507 167.549 18.0507 114.355Z"
          stroke={color}
          stroke-width="35"
        />
        <path
          d="M173.272 197.82C169.367 193.914 169.367 187.583 173.272 183.677L183.879 173.071C187.784 169.166 194.116 169.166 198.021 173.071L245.244 220.294C249.15 224.2 249.15 230.531 245.244 234.436L234.638 245.043C230.733 248.948 224.401 248.948 220.496 245.043L173.272 197.82Z"
          fill={color}
        />
      </svg>
    </Container>
  );
};

export default SearchIcon;
