import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";

const Container = styled.header`
  width: 100%;
  height: 55px;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.mainColor};
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${media.phone} {
    height: 60px;
  }
`;

const Header: React.FunctionComponent = () => {
  const history = useHistory();
  const search = useInput("");
  return (
    <Container>
      <SearchInput
        onChange={search.onChange}
        value={search.value}
      ></SearchInput>
    </Container>
  );
};

export default Header;
