import React, { useState } from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";
import MoreIcon from "../Icon/MoreIcon";

const Container = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.whiteGrey};
  border-bottom: 0.5px solid rgba(101, 166, 74, 0.3);
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

interface IProp {
  style?: any;
  className?: string;
}

const Header: React.FunctionComponent<IProp> = ({ style, className }) => {
  const history = useHistory();
  const search = useInput("");
  const [moreIShow, setMoreIShow] = useState(false);
  const onClick = () => {
    setMoreIShow((s) => !s);
  };

  return (
    <Container style={style} className={className}>
      <HeaderMoreIcon
        onClick={onClick}
        color={moreIShow ? "#6AB04C" : "#999"}
      />
      <SearchInput
        onChange={search.onChange}
        value={search.value}
      ></SearchInput>
    </Container>
  );
};

export default Header;
