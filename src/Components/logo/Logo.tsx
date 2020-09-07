import React from "react";
import styled from "../../typed-components";

const Container = styled.div``;

interface IProp {
  className?: any;
}

const Logo: React.FunctionComponent<IProp> = ({ className }) => {
  return (
    <Container className={className}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 399 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M205.2 -2.00272e-05V18.8H182V61.6H205.2V77.2H182V120H207.2V136H280V-2.00272e-05H205.2ZM9.53674e-07 3.59998V133.2H174V3.59998H99.2V26H75.2V3.59998H9.53674e-07ZM75.2 92V67.6H99.2V92H75.2ZM280 248V148H8V192H205.2V204H8V304H284V260H83.2V248H280ZM361.631 232.8C372.298 232.8 381.098 236.267 388.031 243.2C395.231 250.133 398.831 259.2 398.831 270.4C398.831 281.6 395.231 290.667 388.031 297.6C381.098 304.533 372.298 308 361.631 308C350.965 308 342.031 304.4 334.831 297.2C327.631 290 324.031 281.067 324.031 270.4C324.031 259.2 327.631 250.133 334.831 243.2C342.031 236.267 350.965 232.8 361.631 232.8Z"
          fill="#474747"
        />
      </svg>
    </Container>
  );
};

export default Logo;
