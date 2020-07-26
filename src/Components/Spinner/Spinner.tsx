import React from "react";
import styled, { keyframes } from "../../typed-components";
import { CSSProperties } from "styled-components";

const rotate = keyframes`
    0% { 
    transform: rotate(0deg); 
    }
    100% { 
    transform: rotate(360deg); 
    }
`;

const Container = styled.div`
  z-index: 1;
  width: 25px;
  height: 25px;
  border: 4px solid ${(props) => props.theme.whiteGrey};
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.theme.mainColor};
  -webkit-animation: ${rotate} 0.7s linear infinite;
  animation: ${rotate} 0.7s linear infinite;
`;

interface IProp {
  style?: CSSProperties;
}

const Spinner: React.FunctionComponent<IProp> = ({ style }) => {
  return <Container style={style}></Container>;
};

export default Spinner;
