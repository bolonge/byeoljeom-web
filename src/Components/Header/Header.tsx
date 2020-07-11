import React, { useState } from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";
import MoreIcon from "../Icon/MoreIcon";

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

const HeaderMoreIcon = styled(MoreIcon)`
  display: none;
  transition: 0.3s ease-in-out;
  &:hover {
  }
  ${media.phone} {
    display: flex;
  }
`;

const Header: React.FunctionComponent = () => {
  const history = useHistory();
  const search = useInput("");
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((s) => !s);
  };

  return (
    <Container>
      <HeaderMoreIcon onClick={onClick} />
      <SearchInput
        onChange={search.onChange}
        value={search.value}
      ></SearchInput>
    </Container>
  );
};

export default Header;
