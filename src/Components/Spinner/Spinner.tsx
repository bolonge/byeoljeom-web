import React from "react";
import styled, { keyframes } from "../../typed-components";

const rotate = keyframes`
    0% { 
    transform: rotate(0deg); 
    }
    100% { 
    transform: rotate(360deg); 
    }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = () => {
  return <Container></Container>;
};

export default Spinner;
