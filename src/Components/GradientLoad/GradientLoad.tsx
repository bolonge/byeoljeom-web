import React from "react";
import styled, { keyframes } from "../../typed-components";

const loading = keyframes`
    0% { 
      opacity:0.5
    }
    50%{
        opacity:1 
    }
    100% { 
        opacity:0.5
    }
    `;

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyColor};
  -webkit-animation: ${loading} 1.5s linear infinite;
  animation: ${loading} 1.5s linear infinite;
`;

const GradientLoad: React.FunctionComponent = () => {
  return <Container></Container>;
};

export default GradientLoad;
