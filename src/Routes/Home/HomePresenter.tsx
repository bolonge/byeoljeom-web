import React from "react";
import styled from "../../typed-components";
import Header from "../../Components/Header";

const Wrapper = styled.div`
  min-height: 150vh;
`;

const HomePresenter: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
};

export default HomePresenter;
