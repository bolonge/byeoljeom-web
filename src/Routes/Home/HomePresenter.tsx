import React from "react";
import styled from "../../typed-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Wrapper = styled.div`
  min-height: 80vh;
`;

const HomePresenter: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};

export default HomePresenter;
